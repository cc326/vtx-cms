import { formatString } from '@/Utitls/date-format';
import { App } from 'vue';

export default function (app: App) {
  app.config.globalProperties.$filters = {
    formatTime: function (value: string) {
      return formatString(value);
    }
  };
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $filters: any;
  }
}
