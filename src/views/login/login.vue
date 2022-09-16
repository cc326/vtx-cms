<template>
  <div>login</div>
  <el-button>Default</el-button>
  <el-button type="primary" @click="open">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { useStore } from 'vuex';
const store = useStore();
const open = () => {
  ElMessage.success('this is a message.');
};
</script>

<style scoped lang="scss"></style>
