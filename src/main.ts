import '@/assets/css/index.scss';
import 'element-plus/theme-chalk/index.css';
import 'normalize.css';
import { createApp } from 'vue';
import App from './App.vue';
import { registerApp } from './global';
import router from './router';
import store, { setupStore } from './store';

const app = createApp(App);

//全局导入element icon
registerApp(app);

app.use(store);

setupStore();
app.use(router);

app.mount('#app');
