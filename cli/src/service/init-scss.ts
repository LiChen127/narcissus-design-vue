/**
 * 由于 .vue 类型的组件的样式就直接写在了 style 中，故首先判断组件类型是否是 tsx，tsx 类型的组件才进行这一步的操作：
 * 1.在scss/components/目录下创建组件的scss文件 _xxx.module.scss;
 * 2.在scss/components/index.scss 中导入 _xxx.module.scss
 */

import { ComponentInfo } from '../domain/component-info';
import path, { resolve } from 'path';
import { scssTemplate } from '../util/template-utils';
import fs from 'fs';
import { g } from '../util/log-utils';

const updateComponentScssIndex = (scssRootPath: string, lineName: string): void => {
  const indexScssPath = path.resolve(scssRootPath, 'components/index.scss');
  const content = fs.readFileSync(indexScssPath).toString();
  const newContent = content.substring(0, content.length) + `@use "${lineName}.module";\n`;
  fs.writeFileSync(indexScssPath, newContent);
};

/**
 * 创建组件库scss文件，并在scss/components/index.scss中引入该文件
 */

export const initScss = (componentInfo: ComponentInfo) => new Promise((resolve, reject) => {
  // tsx 类型需要创建scss文件
  if (componentInfo.type === 'tsx') {
    const { parentPath, lineName, lineNameWithPrefix } = componentInfo;

    // scss 根目录（packages/scss）
    const scssRootPath = path.resolve(parentPath, 'scss');

    // 1. 创建组件的 scss 文件
    const componentScssPath = path.resolve(scssRootPath, `components/_${lineName}.module.scss`);
    fs.writeFileSync(componentScssPath, scssTemplate(lineNameWithPrefix));
    // 2. 在组件库 scss 入口文件 （packages/components/index.scss）引入上面创建的文件
    updateComponentScssIndex(scssRootPath, lineName);

    g('component scss init success');
  }
  resolve(componentInfo);
});
