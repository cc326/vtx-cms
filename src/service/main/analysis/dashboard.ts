import CRequest from '@/service';

export function getCategoryGoodsCount() {
  return CRequest.get({ url: '/goods/category/count' });
}
export function getCategoryGoodsFavor() {
  return CRequest.get({ url: '/goods/category/favor' });
}
export function getCategoryGoodsSale() {
  return CRequest.get({ url: '/goods/category/sale' });
}
export function getAddressGoodsSale() {
  return CRequest.get({ url: '/goods/address/sale' });
}
