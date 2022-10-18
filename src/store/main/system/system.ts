import { createPageDate, deletePageDate, editPageDate, getPageListDate } from '@/service/main/system/system';
import { ElMessage } from 'element-plus';

import { IRootState } from '@/store/type';
import { Module } from 'vuex';
import { ISystemState } from './types';

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0
    };
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'users':
            return state.usersList;
          case 'role':
            return state.roleList;
          case 'menu':
            return state.menuList;
          case 'department':
            return state.departmentList;
        }
      };
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`];
      };
    }
  },
  mutations: {
    changeUsersList(state, List) {
      state.usersList = List;
    },
    changeUsersCount(state, Count) {
      state.usersCount = Count;
    },
    changeRoleList(state, List) {
      state.roleList = List;
    },
    changeRoleCount(state, Count) {
      state.roleCount = Count;
    },
    changeMenuList(state, List) {
      state.menuList = List;
    },
    changeMenuCount(state, Count) {
      state.menuCount = 0;
    },
    changeDepartmentList(state, List) {
      state.departmentList = List;
    },
    changeDepartmentCount(state, Count) {
      state.departmentCount = Count;
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName;
      let pageUrl = '';
      switch (pageName) {
        case 'users':
          pageUrl = '/users/list';
          break;
        case 'role':
          pageUrl = '/role/list';
          break;
        case 'menu':
          pageUrl = '/menu/list';
          break;
        case 'department':
          pageUrl = '/department/list';
          break;
      }

      const pageResult = await getPageListDate(pageUrl, payload.queryInfo);

      const { list, totalCount } = pageResult.data;
      const changePageName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1);
      commit(`change${changePageName}List`, list);
      commit(`change${changePageName}Count`, totalCount);
    },
    async deletePageDataActive({ dispatch }, payload: any) {
      const { pageName, id } = payload;
      const pageUrl = `/${pageName}/${id}`;

      const deleteRequest = await deletePageDate(pageUrl);

      if (deleteRequest.code == 0) {
        ElMessage({
          message: deleteRequest.data,
          type: 'success'
        });
        dispatch('getPageListAction', { pageName });
      }
    },
    async createPageDataACtive({ dispatch }, payload: any) {
      const { pageName, createInfo } = payload;
      const pageUrl = `/${pageName}`;
      const craeteRequest = await createPageDate(pageUrl, createInfo);

      if (craeteRequest.code == 0) {
        ElMessage({
          message: craeteRequest.data,
          type: 'success'
        });
        dispatch('getPageListAction', { pageName });
      }
    },
    async editPageDataACtive({ dispatch }, payload: any) {
      const { pageName, editInfo, id } = payload;
      const pageUrl = `/${pageName}/${id}`;
      delete editInfo.createAt;
      delete editInfo.updateAt;
      const editRequest = await editPageDate(pageUrl, editInfo);

      if (editRequest.code == 0) {
        ElMessage({
          message: editRequest.data,
          type: 'success'
        });
        dispatch('getPageListAction', { pageName });
      }
    }
  }
};
export default systemModule;
