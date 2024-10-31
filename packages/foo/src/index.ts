import { App } from 'vue';
import Foo from './button.vue';
const NAME = "narcissus-button";
Foo.name = NAME;
Foo.install = (app: App) => {
  app.component(Foo.name as string, Foo);
};
export default Foo;