<template>
  <div class="user">
    <page-content :contentTableConfig="contentTableConfig" page-name="menu" page-module="system" ref="pageContentRef" />
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/src/page-content.vue';

import { contentTableConfig } from './config/content.config';
</script>

<style scoped lang="scss"></style>
