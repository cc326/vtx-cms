<template>
  <div>
    <base-echart :options="option" ref="baseEchartRef"></base-echart>
  </div>
</template>

<script setup lang="ts">
import baseEchart from '@/base-ui/echart';
import BaseEchart from '@/base-ui/echart/src/base-echart.vue';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
import { computed, defineProps } from 'vue';

const props = defineProps<{
  barData: { value: string[]; xAxis: string[] };
}>();

const option = computed<EChartsOption>(() => {
  return {
    xAxis: {
      data: props.barData.xAxis,
      // axisLabel: {
      //   inside: true,
      //   color: '#fff'
      // },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      },
      axisPointer: {
        show: true
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.barData.value
      }
    ]
  };
});
</script>

<style scoped lang="scss"></style>
