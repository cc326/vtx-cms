import * as echarts from 'echarts';
import ChinaMapData from '../data/china.json';

echarts.registerMap('chinaMap', ChinaMapData);

export default function (el: HTMLElement) {
  const echartsInstence = echarts.init(el, '', { renderer: 'svg' });

  function setOptions(options: echarts.EChartsOption) {
    echartsInstence.setOption(options);
  }

  function updataSize() {
    echartsInstence.resize();
  }

  window.addEventListener('resize', () => {
    echartsInstence.resize();
  });
  return { echartsInstence, setOptions, updataSize };
}
