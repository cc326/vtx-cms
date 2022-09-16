import type { App } from 'vue';
import registerElIcon from './register-elIcon';

//全局注册函数
export function registerApp(app: App) {
  registerElIcon(app);
}
