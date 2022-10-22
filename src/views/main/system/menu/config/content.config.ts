export const contentTableConfig = {
  propList: [
    { prop: 'name', label: '菜单名', minWidth: '80' },
    { prop: 'url', label: '菜单url', minWidth: '80' },
    { prop: 'type', label: '类型', minWidth: '80' },
    { prop: 'createAt', label: '创建时间', minWidth: '120', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '120', slotName: 'updateAt' }
    // { label: '操作', minWidth: '80', slotName: 'handle' }
  ],
  title: '菜单列表',
  showIndexCol: false,
  showSelectionCol: false,
  showFooter: false,
  propChildren: {
    rowKey: 'id'
  }
};
