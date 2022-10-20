<template>
  <div>
    <el-card class="box-card" shadow="always">
      <template #header v-if="title">
        <div class="card-header">
          <span>{{ title }}</span>
        </div>
      </template>
      <div class="item">
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  title: string;
}>();
</script>

<style scoped lang="scss">
.card-header {
  text-align: left;
}
</style>
