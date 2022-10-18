<template>
  <div class="page-search">
    <c-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2>高级检索</h2>
      </template>
      <template #foodter>
        <div class="handle-btn">
          <el-button :icon="Refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" :icon="Search" @click="handleQueryClick">查询</el-button>
        </div>
      </template>
    </c-form>
  </div>
</template>

<script setup lang="ts">
import CForm from '@/base-ui/CForm';
import { Refresh, Search } from '@element-plus/icons-vue';
import { defineEmits, defineProps, ref } from 'vue';
const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
});
const emit = defineEmits(['handleResetClick', 'handleQueryClick']);

let formItem = props.searchFormConfig.formItems ?? [];
//定义form原始对象
let formOriginData: any = {};
for (const item of formItem) {
  formOriginData[item.field] = '';
}

const formData = ref(formOriginData);

//重置
function handleResetClick() {
  for (const key in formOriginData) {
    formData.value[key] = formOriginData[key];
    emit('handleResetClick');
  }
}
//搜索
function handleQueryClick() {
  emit('handleQueryClick', formData.value);
}
</script>

<style scoped lang="scss">
.page-search {
  .handle-btn {
    text-align: right;
    padding: 0 50px 20px 0;
  }
}
</style>
