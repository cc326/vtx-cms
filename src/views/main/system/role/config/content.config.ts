export const contentTableConfig = {
  propList: [
    { prop: 'name', label: '角色名', minWidth: '80', slotName: 'name' },
    { prop: 'intro', label: '权限描述', minWidth: '80', slotName: 'intro' },
    { prop: 'createAt', label: '创建时间', minWidth: '120', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '120', slotName: 'updateAt' },
    { label: '操作', minWidth: '80', slotName: 'handle' }
  ],
  title: '角色列表',
  showIndexCol: true,
  showSelectionCol: true
};
