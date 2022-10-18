import type { App } from 'vue';
import registerElIcon from './register-elIcon';
import registerFilters from './register-filters';

//全局注册函数
export function registerApp(app: App) {
  //两种格式都可以
  registerElIcon(app);
  app.use(registerFilters);
}
