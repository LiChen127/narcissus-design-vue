import Divider from './src/divider.vue';
import { App } from 'vue';

Divider.name = 'narcissus-divider';

Divider.install = (app: App): void => {
  // 注册组件
  app.component(Divider.name as string, Divider);
};

export default Divider;
