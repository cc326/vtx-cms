import 'element-plus/theme-chalk/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import { registerApp } from './global';
import router from './router';
import cRequset from './service';
import store from './store';

const app = createApp(App);

//全局导入element icon
registerApp(app);

app.use(store);

app.use(router);

app.mount('#app');

cRequset
  .post({
    url: '/login',
    data: {
      name: 'kobe',
      password: '123456'
    }
  })
  .then((res) => {
    console.log(res);
  });
