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

//获取用户按钮权限
export function mapMenuToPermissions(userMenus: any[]) {
  //该用户按钮权限
  const permissions: string[] = [];

  function _recurseGetPermissions(menus: any[]) {
    for (const menu of menus) {
      if (menu.type == 1 || menu.type == 2) {
        _recurseGetPermissions(menu.children ?? []);
      } else if (menu.type == 3) {
        permissions.push(menu.permission);
      }
    }
  }
  _recurseGetPermissions(userMenus);

  return permissions;
}

//获取菜单叶子节点  回显编辑角色权限
export function mapMenuLeafKeys(menuList: any) {
  const leftKeys: number[] = [];

  const _recurseGetLeftKeys = (menuList: any) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeftKeys(menu.children);
      } else {
        leftKeys.push(menu.id);
      }
    }
  };
  _recurseGetLeftKeys(menuList);
  return leftKeys;
}
