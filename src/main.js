import { createApp } from 'vue';
import App from './App.vue';
// 因為index.js中有export default router這個檔案, 故在此可以引入使用
import router from './router';

createApp(App).use(router).mount('#app');
