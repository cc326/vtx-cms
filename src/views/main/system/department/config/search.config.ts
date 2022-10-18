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
      label: '部门',
      placeholder: '请输入部门'
    },
    {
      field: 'leader',
      type: 'input',
      label: '主管',
      placeholder: '请输入主管'
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
