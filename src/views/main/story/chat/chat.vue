<template>
  <div class="chat">
    <el-form inline ref="formRef" label-width="100px" label-position="left" class="title">
      <el-form-item label="标题" prop="" class="name">
        <el-input v-model="title" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
      </el-form-item>
    </el-form>
    <hy-editor v-model:value="htmlString" />
  </div>
</template>

<script setup lang="ts">
import HyEditor from '@/base-ui/editor';
import { useStore } from '@/store';
import { ref } from 'vue';
const store = useStore();

const htmlString = ref<string>('');
const title = ref('');
function onSubmit() {
  store.dispatch('system/createPageDataACtive', {
    pageName: 'story',
    createInfo: {
      title: title.value,
      content: htmlString.value
    }
  });
}
</script>

<style scoped lang="scss">
.chat {
  padding: 20px;
  .title {
    display: flex;
    .name {
      flex: 1;
    }
  }
}
</style>
