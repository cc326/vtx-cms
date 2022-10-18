<template>
  <div class="user">
    <div class="search">
      <page-search
        :search-form-config="searchFormConfig"
        @handleQueryClick="handleQueryClick"
        @handleResetClick="handleResetClick"
      />
    </div>
    <page-content
      :contentTableConfig="contentTableConfig"
      page-module="system"
      page-name="department"
      ref="pageContentRef"
    >
      <template #enable="scope">
        <el-button size="small" :type="scope.row ? 'success' : 'danger'" plain>{{
          scope.row ? '启用' : '禁用'
        }}</el-button>
      </template>
    </page-content>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/src/page-content.vue';
import PageSearch from '@/components/page-search/src/page-search.vue';

import { usePageSearch } from '@/hooks/use-page-search';
import { contentTableConfig } from './config/content.config';
import { searchFormConfig } from './config/search.config';
const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch();
</script>

<style scoped lang="scss"></style>
