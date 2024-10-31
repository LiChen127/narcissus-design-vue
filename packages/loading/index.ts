
import Loading from './src/loading.vue'
import { App } from 'vue';

Loading.name = 'narcissus-loading'

Loading.install = (app: App): void => {
  // 注册组件
  app.component(Loading.name as string , Loading);
}

export default Loading;
