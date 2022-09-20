<template>
  <div class="user">
    <div class="search">
      <c-form v-bind="searchFormConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import CForm from '@/base-ui/CForm';
import { searchFormConfig } from './config/search.config';
</script>

<style scoped>
.search {
  background-color: #fff;
}
</style>
