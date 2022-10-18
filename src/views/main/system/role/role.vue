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
      ref="pageContentRef"
      page-module="system"
      page-name="role"
      @handle-edit-click="handleEditClick"
      @handle-new-click="handleNewClick"
    >
      <template #enable="scope">
        <el-button size="small" :type="scope.row ? 'success' : 'danger'" plain>
          {{ scope.row ? '启用' : '禁用' }}
        </el-button>
      </template>
    </page-content>
    <page-dialog
      :dialogConfig="dialogConfig"
      ref="pageDialogRef"
      :defaultInfo="defaultInfo"
      page-name="role"
      :other-info="otherInfo"
    >
      <el-tree
        ref="ElTreeRef"
        style="margin-left: 40px"
        :data="menuList"
        :props="{ children: 'children', label: 'name' }"
        show-checkbox
        node-key="id"
        @check="handleCheck"
      />
    </page-dialog>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/src/page-content.vue';
import PageDialog from '@/components/page-dialog';
import PageSearch from '@/components/page-search/src/page-search.vue';
import { ElTree } from 'element-plus';
import { computed, nextTick, ref } from 'vue';

import { useDialog } from '@/hooks/use-dialog';
import { usePageSearch } from '@/hooks/use-page-search';
import { useStore } from '@/store';
import { mapMenuLeafKeys } from '@/Utitls/map-menu';
import { contentTableConfig } from './config/content.config';
import { dialogConfig } from './config/dialog.config';
import { searchFormConfig } from './config/search.config';
const store = useStore();

const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch();

//新建 编辑 table
const { handleEditClick, handleNewClick, pageDialogRef, defaultInfo } = useDialog(undefined, editCallBack);

//点击编辑回显 权限菜单
const ElTreeRef = ref<InstanceType<typeof ElTree>>();
function editCallBack(item: any) {
  const leftKeys = mapMenuLeafKeys(item.menuList);
  nextTick(() => {
    ElTreeRef.value?.setCheckedKeys(leftKeys, false);
  });
}

//获取全部菜单
const menuList = computed(() => store.state.entireMenus);
const otherInfo = ref({});
function handleCheck(data1: any, data2: any) {
  otherInfo.value = { menuList: [...data2.checkedKeys, ...data2.halfCheckedKeys] };
}
</script>

<style scoped lang="scss"></style>
