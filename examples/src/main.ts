// const env = import.meta.env
// console.log(env)
import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import NarcissusDesignVue from '@narcissus-design-vue/narcissus-design-vue';
import App from './App.vue'
const app = createApp(App);
console.log(NarcissusDesignVue);
app.use(ElementPlus);
app.use(NarcissusDesignVue);
app.mount('#app');