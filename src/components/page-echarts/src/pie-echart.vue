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
  pieData: any[];
}>();

const option = computed<EChartsOption>(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
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
