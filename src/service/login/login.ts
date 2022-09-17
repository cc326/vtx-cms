import cRequset from '../index';
import { IAccount } from './type';
export function accountLoginRequest(account: IAccount) {
  return cRequset.post({
    url: '/login',
    data: account
  });
}
export function resultUserInfoById(id: string) {
  return cRequset.get({
    url: '/users/' + id
  });
}
export function resultUserMenusByRoleId(roleId: string) {
  return cRequset.get({
    url: '/role/' + roleId + '/menu'
  });
}
