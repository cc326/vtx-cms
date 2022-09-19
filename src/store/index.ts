import type { Store } from 'vuex';
import { createStore, useStore as useVuexStore } from 'vuex';
import login from './login/login';
import { IRootState, IStoreType } from './type';

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'jb'
    };
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: { login }
});

export function setupStore() {
  store.dispatch('login/loadLocalLogin');
}
export default store;

export function useStore(): Store<IStoreType> {
  return useVuexStore();
}
