import type { IForm } from '@/base-ui/CForm';
export const dialogConfig: IForm = {
  labelWidth: '80px',
  colLayout: { span: 24 },
  itemStyle: { padding: '10px 40px' },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '姓名',
      placeholder: '请输入姓名'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '手机号',
      placeholder: '请输入手机号'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输密码'
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '部门',
      placeholder: '请选择状态',
      options: []
    },
    {
      field: 'roleId',
      type: 'select',
      label: '角色',
      placeholder: '请选择状态',
      options: []
    }
  ]
};
