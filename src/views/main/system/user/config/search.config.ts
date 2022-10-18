import type { IForm } from '@/base-ui/CForm';
export const searchFormConfig: IForm = {
  labelWidth: '120px',
  colLayout: {
    xl: 8,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
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
      field: 'enable',
      type: 'select',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        {
          title: '禁用',
          value: '0'
        },
        {
          title: '启用',
          value: '1'
        }
      ]
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间'
      }
    }
  ]
};
