<template>
  <div class="base-echart">
    <div ref="echartRef" :style="{ width, height }"></div>
  </div>
</template>

<script setup lang="ts">
import type { EChartsOption } from 'echarts';
import { defineProps, onMounted, ref, watchEffect, withDefaults } from 'vue';
import useEcharts from '../hooks/useEcharts';
const props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    options: EChartsOption;
  }>(),
  {
    width: '100%',
    height: '360px'
  }
);

const echartRef = ref<HTMLElement>();

onMounted(() => {
  const { setOptions, echartsInstence } = useEcharts(echartRef.value!);
  watchEffect(() => {
    setOptions(props.options);
  });
});
</script>

<style scoped lang="scss"></style>
