import Divider from '@narcissus-design-vue/divider';
import Button from '@narcissus-design-vue/button';

import { App } from 'vue';

const components = [Button, Divider];

const install = (app: App): void => {
  components.forEach((component) => {
    if (component.name) {
      app.component(component.name, component);
      console.log(component.name);
    } else {
      console.warn('Component name is undefined:', component);
    }
  });
};

export default {
  install,
};
