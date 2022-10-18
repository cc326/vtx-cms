export const contentTableConfig = {
  propList: [
    { prop: 'name', label: '用户名', minWidth: '80', slotName: 'name' },
    { prop: 'realname', label: '姓名', minWidth: '80', slotName: 'realname' },
    { prop: 'cellphone', label: '手机号', minWidth: '80', slotName: 'cellphone' },
    { prop: 'enable', label: '状态', minWidth: '80', slotName: 'enable' },
    { prop: 'createAt', label: '创建时间', minWidth: '120', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '120', slotName: 'updateAt' },
    { label: '操作', minWidth: '80', slotName: 'handle' }
  ],
  title: '用户列表',
  showIndexCol: true,
  showSelectionCol: true
};
