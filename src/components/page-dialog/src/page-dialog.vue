<template>
  <div class="page-dialog">
    <el-dialog v-model="DialogVisible" title="新建用户" width="30%" center destroy-on-close>
      <c-form v-bind="dialogConfig" v-model="formData" />
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="DialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import CForm from '@/base-ui/CForm';
import store from '@/store';
import { defineExpose, defineProps, ref, watch } from 'vue';
const props = defineProps({
  dialogConfig: {
    type: Object,
    required: true
  },
  defaultInfo: {
    type: Object,
    default: () => ({})
  },
  pageName: {
    type: String,
    required: true
  },
  otherInfo: {
    type: Object,
    default: () => ({})
  }
});

const formData = ref({});
watch(
  () => props.defaultInfo,
  (newValue) => {
    formData.value = { ...newValue };
  }
);

const DialogVisible = ref(false);
function handleConfirmClick() {
  DialogVisible.value = false;
  if (Object.keys(props.defaultInfo).length) {
    //编辑
    store.dispatch('system/editPageDataACtive', {
      pageName: props.pageName,
      editInfo: { ...formData.value, ...props.otherInfo },
      id: props.defaultInfo.id
    });
  } else {
    //新建
    store.dispatch('system/createPageDataACtive', {
      pageName: props.pageName,
      createInfo: { ...formData.value, ...props.otherInfo }
    });
  }
}

defineExpose({ DialogVisible });
</script>

<style scoped lang="scss"></style>
