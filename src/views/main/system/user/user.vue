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
      page-name="users"
      ref="pageContentRef"
      @handle-edit-click="handleEditClick"
      @handle-new-click="handleNewClick"
    >
      <template #enable="scope">
        <el-button size="small" :type="scope.row ? 'success' : 'danger'" plain>{{
          scope.row ? '启用' : '禁用'
        }}</el-button>
      </template>
    </page-content>
    <page-dialog :dialogConfig="newDialogConfig" ref="pageDialogRef" :defaultInfo="defaultInfo" page-name="users">
    </page-dialog>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content';
import PageDialog from '@/components/page-dialog';
import PageSearch from '@/components/page-search';
import { computed } from 'vue';

import { useDialog } from '@/hooks/use-dialog';
import { usePageSearch } from '@/hooks/use-page-search';
import { useStore } from '@/store';
import { contentTableConfig } from './config/content.config';
import { dialogConfig } from './config/dialog.config';
import { searchFormConfig } from './config/search.config';

//搜索重置 查询
const { pageContentRef, handleResetClick, handleQueryClick } = usePageSearch();

//设置是否隐藏密码
function newCallBack() {
  const passwordItem = dialogConfig.formItems.find((item) => item.field == 'password');
  if (passwordItem) passwordItem.isHidden = false;
}
function editCallBack() {
  const passwordItem = dialogConfig.formItems.find((item) => item.field == 'password');
  if (passwordItem) passwordItem.isHidden = true;
}
//新建 编辑 table
const { handleEditClick, handleNewClick, pageDialogRef, defaultInfo } = useDialog(newCallBack, editCallBack);

//添加 新建 部门角色信息
const newDialogConfig = computed(() => {
  const store = useStore();
  const departmentItem = dialogConfig.formItems.find((item) => item.field == 'departmentId');
  departmentItem!.options = store.state.entireDepartment.map((item) => ({ title: item.name, value: item.id }));
  const roleItem = dialogConfig.formItems.find((item) => item.field == 'roleId');
  roleItem!.options = store.state.entireRole.map((item) => ({ title: item.name, value: item.id }));
  return dialogConfig;
});
</script>

<style scoped lang="scss"></style>
