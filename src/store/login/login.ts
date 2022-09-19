import router from '@/router';
import { accountLoginRequest, resultUserInfoById, resultUserMenusByRoleId } from '@/service/login/login';
import { IAccount } from '@/service/login/type';
import lc from '@/Utitls/cache';
import { MapMenuToRouter } from '@/Utitls/map-menu';
import { Module } from 'vuex';
import { IRootState } from '../type';
import { ILoginState } from './type';

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    };
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token;
    },
    changeUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus;

      //添加动态路由
      const routes = MapMenuToRouter(userMenus);
      console.log(routes);
      routes.forEach((route) => {
        router.addRoute('main', route);
      });
    }
  },
  actions: {
    async accountLoginActive({ commit }, payload: IAccount) {
      //登录逻辑
      const loginResult = await accountLoginRequest(payload);
      const { id, token } = loginResult.data;
      commit('changeToken', token);
      lc.setCache('token', token);

      //获取userinfo
      const userInfoResult = await resultUserInfoById(id);
      commit('changeUserInfo', userInfoResult.data);
      lc.setCache('userInfo', userInfoResult.data);

      //获取usermenus
      const userMenusResult = await resultUserMenusByRoleId(userInfoResult.data.role.id);
      commit('changeUserMenus', userMenusResult.data);
      lc.setCache('userMenus', userMenusResult.data);

      //跳转main
      router.push('/main');
    },
    //刷新页面初始化vuex
    loadLocalLogin({ commit }) {
      const token = lc.getCache('token');

      if (token) commit('changeToken', token);

      const userInfo = lc.getCache('userInfo');
      if (userInfo) commit('changeUserInfo', userInfo);

      const userMenus = lc.getCache('userMenus');
      if (userMenus) commit('changeUserMenus', userMenus);
    }
  }
};

export default loginModule;
