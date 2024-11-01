import inquirer, { QuestionCollection } from 'inquirer';
import { ComponentInfo } from '../domain/component-info';
import { closeLoading, showLoading } from '../util/loading-utils';
import { r } from '../util/log-utils';
import { initComponent } from '../service/init-component';
import { initScss } from '../service/init-scss';
import { updateComponentLib } from '../service/update-component-lib';
import { initDoc } from '../service/init-doc';

// 交互提示
const questions: QuestionCollection = [
  {
    name: 'componentName',
    message: 'Input the component name: ',
    default: '',
  },
  {
    name: 'description',
    message: 'Input the component description: ',
    default: '',
  },
  {
    type: 'list',
    name: 'componentType',
    message: 'Input the component type: ',
    choices: [
      'tsx',
      'vue',
    ],
  },
];

// 实现交互(注入)
const createNewComponent = async (componentName: string, description: string, componentType: string) => {
  console.log(componentName, description, componentType);
  showLoading('Generating, please wait...');
  try {
    // 1.构造 ComponentInfo对象
    const componentInfo = new ComponentInfo(componentName, description, componentType);
    // 2.构建组件目录及其文件
    await initComponent(componentInfo);
    // 3.构建样式
    await initScss(componentInfo);
    // 4.更新组件库入口
    await updateComponentLib(componentInfo);
    // 5.更新组件库文档
    await initDoc(componentInfo);
  } catch (error: any) {
    r(error.message);
  } finally {
    closeLoading();
  }
};
export const createComponent = () => {
  inquirer.prompt(questions).then(({ componentName, description, componentType }) => {
    createNewComponent(componentName, description, componentType);
  });
};
