export const contentTableConfig = {
  propList: [
    { prop: 'name', label: '部门', minWidth: '80' },
    { prop: 'leader', label: '主管', minWidth: '80' },
    { prop: 'createAt', label: '创建时间', minWidth: '120', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '120', slotName: 'updateAt' },
    { label: '操作', minWidth: '80', slotName: 'handle' }
  ],
  title: '部门列表',
  showIndexCol: true,
  showSelectionCol: true
};
