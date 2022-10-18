import cRequset from '@/service';

export function getPageListDate(url: string, queryInfo: object) {
  return cRequset.post({
    url,
    data: queryInfo
  });
}
