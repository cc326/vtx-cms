import { coordinateData } from './coordinate-data';

export function convertData(data: any) {
  const res = [];
  for (let i = 0; i < data.length; i++) {
    const geoCoord = coordinateData[data[i].address];
    console.log(geoCoord);

    if (geoCoord) {
      res.push({
        name: data[i].address,
        value: geoCoord.concat(data[i].count)
      });
    }
  }
  return res;
}
