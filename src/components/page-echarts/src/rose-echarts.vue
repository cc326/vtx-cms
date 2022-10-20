<template>
  <div>
    <base-echart :options="option"></base-echart>
  </div>
</template>

<script setup lang="ts">
import BaseEchart from '@/base-ui/echart/src/base-echart.vue';
import { EChartsOption } from 'echarts';
import { computed, defineProps } from 'vue';

const props = defineProps<{
  roseData: any[];
}>();

const option = computed<EChartsOption>(() => {
  return {
    legend: {
      top: 'top'
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [0, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        },
        data: props.roseData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
});
</script>

<style scoped lang="scss"></style>
