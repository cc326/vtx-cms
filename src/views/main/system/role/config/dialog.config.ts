import type { IForm } from '@/base-ui/CForm';
export const dialogConfig: IForm = {
  labelWidth: '80px',
  colLayout: { span: 24 },
  itemStyle: { padding: '10px 40px' },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限描述',
      placeholder: '请输入权限描述'
    }
  ]
};
