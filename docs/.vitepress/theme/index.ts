import DefaultTheme from 'vitepress/theme';
import { AntDesignContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';
import NarcissusUI from '@narcissus-design-vue/narcissus-design-vue';
import { EnhanceAppContext } from 'vitepress';

export default {
  ...DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(NarcissusUI);
    ctx.app.component('demo-preview', AntDesignContainer);
  },
};
