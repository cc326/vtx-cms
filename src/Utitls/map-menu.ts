//生成动态路由映射
import { RouteRecordRaw } from 'vue-router';

export let firstMenu: any;
export function MapMenuToRouter(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  //加载所有默认路由
  const allRoutes: RouteRecordRaw[] = [];
  const routeFiles = require.context('../router/main', true, /\.ts/);
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1]);
    allRoutes.push(route.default);
  });

  //根据菜单获取需要添加的路由

  function _recurseGetRouter(menus: any[]) {
    for (const menu of menus) {
      if (menu.type == 2) {
        const route = allRoutes.find((route) => route.path == menu.url);
        if (route) routes.push(route);

        if (!firstMenu) firstMenu = menu;
      } else {
        _recurseGetRouter(menu.children);
      }
    }
  }
  _recurseGetRouter(userMenus);

  return routes;
}
