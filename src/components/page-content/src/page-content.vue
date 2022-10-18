<template>
  <div class="page-content">
    <c-table v-bind="contentTableConfig" :listData="dataList" :listCount="dataCount" v-model:page="pageInfo">
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" v-if="isCreate" @click="handleNewClick">新建</el-button>
      </template>

      <!-- 列表中固定的插槽 -->
      <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
      </template>
      <template #handle="scope">
        <div>
          <el-button type="primary" link v-if="isUpdate" @click="handleEditClick(scope.row)">编辑</el-button>
          <el-button type="danger" link v-if="isDelete" @click="handleDeleteClick(scope.row)"> 删除</el-button>
        </div>
      </template>

      <!-- 列表中的动态插槽 -->
      <template v-for="item in otherPropSlot" #[`${item.slotName}`]="scope" :key="item.prop">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"> </slot>
        </template>
      </template>
    </c-table>
  </div>
</template>

<script setup lang="ts">
import cTable from '@/base-ui/CTable';
import { usePermission } from '@/hooks/use-permission';
import { useStore } from '@/store';
import { computed, defineEmits, defineExpose, defineProps, ref, watch } from 'vue';

defineExpose({ getPageData });
const emit = defineEmits(['handleNewClick', 'handleEditClick']);

const props = defineProps({
  contentTableConfig: {
    type: Object,
    required: true
  },
  pageName: {
    type: String,
    required: true
  },
  pageModule: {
    type: String,
    required: true
  }
});

const store = useStore();

const dataList = computed(() => store.getters[`${props.pageModule}/pageListData`](props.pageName));
const dataCount = computed(() => store.getters[`${props.pageModule}/pageListCount`](props.pageName));

//获取按钮权限
const isCreate = usePermission(props.pageName, 'create');
const isUpdate = usePermission(props.pageName, 'update');
const isDelete = usePermission(props.pageName, 'delete');
const isQuery = usePermission(props.pageName, 'query');

const pageInfo = ref({
  currentPage: 1,
  pageSize: 10
});
watch(pageInfo, () => getPageData());
function getPageData(queryInfo: any = {}) {
  if (!isQuery) return;
  store.dispatch(`${props.pageModule}/getPageListAction`, {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  });
}
getPageData();

//获取所有slotName
let otherPropSlot: any = props.contentTableConfig.propList.filter((item: any) => {
  if (item.slotName === 'createAt') return false;
  if (item.slotName === 'updateAt') return false;
  if (item.slotName === 'handle') return false;
  return true;
});

//新增、编辑、删除
function handleDeleteClick(data: any) {
  store.dispatch('system/deletePageDataActive', { pageName: props.pageName, id: data.id });
}
function handleEditClick(data: any) {
  emit('handleEditClick', data);
}
function handleNewClick() {
  emit('handleNewClick');
}
</script>

<style scoped lang="scss">
.page-content {
  padding: 20px;
  border-top: 20px #f0f2f5 solid;
}
</style>
