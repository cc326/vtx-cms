import {
  getAddressGoodsSale,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from '@/service/main/analysis/dashboard';
import { IRootState } from '@/store/type';
import { Module } from 'vuex';
import { IDashboardState } from './type';

const dashboardState: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    };
  },
  mutations: {
    changeCategoryGoodsCount(state, list) {
      state.categoryGoodsCount = list;
    },
    changeCategoryGoodsFavor(state, list) {
      state.categoryGoodsFavor = list;
    },
    changeCategoryGoodsSale(state, list) {
      state.categoryGoodsSale = list;
    },
    changeAddressGoodsSale(state, list) {
      state.addressGoodsSale = list;
    }
  },
  actions: {
    async getPageList({ commit }) {
      const CategoryCountRes = await getCategoryGoodsCount();
      commit('changeCategoryGoodsCount', CategoryCountRes.data);
      const CategoryFavorRes = await getCategoryGoodsFavor();
      commit('changeCategoryGoodsFavor', CategoryFavorRes.data);
      const CategorySaleRes = await getCategoryGoodsSale();
      commit('changeCategoryGoodsSale', CategorySaleRes.data);
      const AddressSaleRes = await getAddressGoodsSale();
      commit('changeAddressGoodsSale', AddressSaleRes.data);
    }
  }
};

export default dashboardState;
