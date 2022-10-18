<template>
  <div class="goods">
    <page-search
      :search-form-config="searchFormConfig"
      @handleQueryClick="handleQueryClick"
      @handleResetClick="handleResetClick"
    />
    <page-content
      :content-table-config="contentTableConfig"
      ref="pageContentRef"
      page-module="product"
      page-name="goods"
    >
      <template #imgUrl="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          fit="contain"
          preview-teleported
      /></template>
    </page-content>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/src/page-content.vue';

import { usePageSearch } from '@/hooks/use-page-search';
import { contentTableConfig } from './config/content.config';
import { searchFormConfig } from './config/search.config';
const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch();
</script>

<style scoped></style>
