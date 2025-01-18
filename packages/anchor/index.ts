import Anchor from './src/anchor.vue';
import { App } from 'vue';

Anchor.name = 'narcissus-anchor';

Anchor.install = (app: App): void => {
  // 注册组件
  app.component(Anchor.name as string, Anchor);
};

export default Anchor;
