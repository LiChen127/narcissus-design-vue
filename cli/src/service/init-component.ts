/**
 * 创建组件库目录及其文件
 */
import { ComponentInfo } from '../domain/component-info';
import fs from 'fs';
import path from 'path';
import { execCmd } from '../util/cmd-utils';
import { Config } from '../config';
import { g } from '../util/log-utils';
import { indexTemplate, sfcTemplate, tsxTemplate, typesTemplate } from '../util/template-utils';

export const initComponent = (componentInfo: ComponentInfo) => new Promise((resolve, reject) => {
  if (fs.existsSync(componentInfo.fullPath)) {
    return reject(new Error('组件已存在'));
  }
  // 1.创建组件根目录
  fs.mkdirSync(componentInfo.fullPath);

  // 2.初始化package.json
  execCmd(`cd ${componentInfo.fullPath} && pnpm init`).then((r) => {
    // 3.修改package.json
    updatePackageJson(componentInfo);

    // 4.安装utils依赖
    execCmd(`cd ${componentInfo.fullPath} && pnpm install @${Config.COMPONENT_LIB_NAME}/utils`);

    // 5.创建组件src目录
    fs.mkdirSync(path.resolve(componentInfo.fullPath, 'src'));

    // 6.创建 src/xxx.vue 或 src/xxx.tsx
    createSrcIndex(componentInfo);

    // 7.创建src/types.ts 文件
    createSrcTypes(componentInfo);

    // 8.创建index.ts
    createIndex(componentInfo);

    g('component init success');

    return resolve(componentInfo);
  }).catch((e) => {
    return reject(e);
  });
});

// 修改package.json文件
const updatePackageJson = (componentInfo: ComponentInfo) => {
  const { lineName, fullPath, nameWithLib } = componentInfo;
  const packageJsonPath = `${fullPath}/package.json`;
  if (fs.existsSync(packageJsonPath)) {
    // 读取package.json文件
    let content = fs.readFileSync(packageJsonPath).toString();
    // 将默认生成的name替换为带有@narcissus-desigin-vue前缀的形式
    content = content.replace(lineName, nameWithLib);
    fs.writeFileSync(packageJsonPath, content);
  }
};

// 创建组件
const createSrcIndex = (componentInfo: ComponentInfo) => {
  let content = '';
  if (componentInfo.type === 'vue') {
    content = sfcTemplate(componentInfo.lineNameWithPrefix, componentInfo.lowCamelName);
  } else {
    content = tsxTemplate(componentInfo.lineNameWithPrefix, componentInfo.lowCamelName);
  }
  const fileFullName = `${componentInfo.fullPath}/src/${componentInfo.lineName}.${componentInfo.type}`;
  fs.writeFileSync(fileFullName, content);
};

// 创建src下的types声明文件
const createSrcTypes = (componentInfo: ComponentInfo) => {
  const content = typesTemplate(componentInfo.lowCamelName, componentInfo.upCamelName);
  const fileFullName = `${componentInfo.fullPath}/src/types.ts`;
  fs.writeFileSync(fileFullName, content);
};

// 创建index.ts
const createIndex = (componentInfo: ComponentInfo) => {
  fs.writeFileSync(`${componentInfo.fullPath}/index.ts`, indexTemplate(componentInfo));
};
