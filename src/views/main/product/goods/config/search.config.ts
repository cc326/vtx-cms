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
      label: '商品名',
      placeholder: '请输入商品名'
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '价格',
      placeholder: '请输入价格'
    },
    {
      field: 'status',
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
