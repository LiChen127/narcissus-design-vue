import { createApp } from 'vue'
import NarcissusDesignVue from '@narcissus-design-vue/narcissus-design-vue';
import App from './App.vue'
const app = createApp(App);
console.log(NarcissusDesignVue);
app.use(NarcissusDesignVue);
app.mount('#app');
