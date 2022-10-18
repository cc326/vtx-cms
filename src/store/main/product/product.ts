import { getPageListDate } from '@/service/main/product/product';
import { IRootState } from '@/store/type';
import { Module } from 'vuex';
import { IProductState } from './types';

const productModule: Module<IProductState, IRootState> = {
  namespaced: true,
  state() {
    return {
      goodsList: [],
      goodsCount: 0
    };
  },
  mutations: {
    changeGoodsList(state, list) {
      state.goodsList = list;
    },
    changeGoodsCount(state, Count) {
      state.goodsCount = Count;
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`];
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName;
      const pageUrl = `/${pageName}/list`;

      const pageResult = await getPageListDate(pageUrl, payload.queryInfo);
      const { totalCount, list } = pageResult.data;

      const changePageName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1);
      commit(`change${changePageName}List`, list);
      commit(`change${changePageName}Count`, totalCount);
    }
  }
};

export default productModule;
