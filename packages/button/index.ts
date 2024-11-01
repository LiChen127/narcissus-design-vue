import Button from './src/button.vue';
import { App } from 'vue';

Button.name = 'narcissus-button';

Button.install = (app: App): void => {
  // 注册组件
  app.component(Button.name as string, Button);
};

export default Button;
