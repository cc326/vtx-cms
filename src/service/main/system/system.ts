import cRequset from '@/service';

export function getPageListDate(url: string, queryInfo?: object) {
  return cRequset.post({
    url,
    data: queryInfo
  });
}
export function deletePageDate(url: string) {
  return cRequset.detele({
    url
  });
}
export function createPageDate(url: string, createInfo: object) {
  return cRequset.post({
    url,
    data: createInfo
  });
}
export function editPageDate(url: string, editInfo: object) {
  return cRequset.patch({
    url,
    data: editInfo
  });
}
