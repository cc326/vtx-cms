import { useStore } from '@/store';
//判断是否有按钮权限
export function usePermission(pageName: string, handleName: string) {
  const store = useStore();
  const permissions = store.state.login.permissions;
  const verifyPermission = `system:${pageName}:${handleName}`;

  return !!permissions.find((item) => item === verifyPermission);
}
