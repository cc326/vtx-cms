import { ILoginState } from './login/type';
import { IDashboardState } from './main/analysis/type';
import { IProductState } from './main/product/types';
import { ISystemState } from './main/system/types';
export interface IRootState {
  name: string;
  entireDepartment: any[]; //全部部门
  entireRole: any[]; //全部角色
  entireMenus: any[]; //全部菜单
}

export interface IRootWithModule {
  login: ILoginState;
  system: ISystemState;
  product: IProductState;
  dashboard: IDashboardState;
}

export type IStoreType = IRootState & IRootWithModule;
