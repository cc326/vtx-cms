import { getPageListDate } from '@/service/main/system/system';
import dashboard from '@/store/main/analysis/dashboard';
import type { Store } from 'vuex';
import { createStore, useStore as useVuexStore } from 'vuex';
import login from './login/login';
import product from './main/product/product';
import system from './main/system/system';
import { IRootState, IStoreType } from './type';

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'jb',
      entireDepartment: [],
      entireRole: [],
      entireMenus: []
    };
  },
  getters: {},
  mutations: {
    changeDepartmentList(state, list) {
      state.entireDepartment = list;
    },
    changeRoleList(state, list) {
      state.entireRole = list;
    },
    changeMenusList(state, list) {
      state.entireMenus = list;
    }
  },
  actions: {
    async getInitialDataActive({ commit }) {
      const departmentResult = await getPageListDate('/department/list');
      commit('changeDepartmentList', departmentResult.data.list);
      const roleResult = await getPageListDate('/role/list');
      commit('changeRoleList', roleResult.data.list);
      const menusResult = await getPageListDate('/menu/list');
      commit('changeMenusList', menusResult.data.list);
    }
  },
  modules: { login, system, product, dashboard }
});

export function setupStore() {
  store.dispatch('login/loadLocalLogin');
}
export default store;

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
