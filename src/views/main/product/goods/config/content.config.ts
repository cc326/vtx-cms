export const contentTableConfig = {
  propList: [
    { prop: 'name', label: '商品名', minWidth: '80' },
    { prop: 'newPrice', label: '价格', minWidth: '80' },
    { prop: 'imgUrl', label: '图片', minWidth: '80', slotName: 'imgUrl' },
    { prop: 'status', label: '状态', minWidth: '80', slotName: 'status' },
    { prop: 'createAt', label: '创建时间', minWidth: '120', slotName: 'createAt' },
    { prop: 'updateAt', label: '更新时间', minWidth: '120', slotName: 'updateAt' },
    { label: '操作', minWidth: '80', slotName: 'handle' }
  ],
  title: '商品列表',
  showIndexCol: true,
  showSelectionCol: true
};
