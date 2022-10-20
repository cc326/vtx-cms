<template>
  <div class="map-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import BaseEchart from '@/base-ui/echart';
import { EChartsOption } from 'echarts';
import { computed, defineProps } from 'vue';

// import { IPieEchartData } from '../types';
import { convertData } from '../utils/convert-data';

const props = defineProps<{
  mapData: any[];
}>();
console.log(convertData(props.mapData));

const options = computed<EChartsOption>(() => {
  return {
    backgroundColor: '#fff',
    tooltip: {
      trigger: 'item',
      formatter: function (params: any) {
        return params.name + ' : ' + params.value[2];
      }
    },
    visualMap: {
      min: 0,
      max: 60000,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ['高', '低'],
      inRange: {
        color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
      },
      textStyle: {
        color: '#fff'
      }
    },
    geo: {
      map: 'chinaMap',
      roam: 'scale',
      emphasis: {
        areaColor: '#f4cccc',
        borderColor: 'rgb(9, 54, 95)',
        itemStyle: {
          areaColor: '#f4cccc'
        }
      }
    },
    series: [
      {
        name: '销量',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(props.mapData),
        symbolSize: 12,
        emphasis: {
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          }
        }
      },
      {
        type: 'map',
        map: 'chinaMap',
        geoIndex: 0,
        aspectScale: 0.75,
        // data: convertData(props.mapData),
        tooltip: {
          show: false
        }
      }
    ]
  };
});
</script>

<style scoped></style>
