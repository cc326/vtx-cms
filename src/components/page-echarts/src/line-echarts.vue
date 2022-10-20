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
  lineData: { value: string[]; xAxis: string[] };
}>();

const option = computed<EChartsOption>(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.lineData.xAxis
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    series: [
      {
        name: '',
        data: props.lineData.value,
        type: 'line',
        areaStyle: {}
      }
    ]
  };
});
</script>

<style scoped lang="scss"></style>
