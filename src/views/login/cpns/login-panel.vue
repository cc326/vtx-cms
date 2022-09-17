<template>
  <div class="login-panel">
    <h1 class="title">CMS</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="btn" @click="handleLoginClick"
      >登录</el-button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoginAccount from './login-account.vue';
import LoginPhone from './login-phone.vue';

let isKeepPassword = ref(true);
const accountRef = ref<InstanceType<typeof LoginAccount>>();

function handleLoginClick() {
  accountRef.value?.loginActive(isKeepPassword.value);
}
</script>

<style scoped lang="scss">
.login-panel {
  width: 22rem;
  margin-bottom: 12rem;
  .title {
    text-align: center;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
  }
  .btn {
    width: 100%;
    height: 2.5rem;
  }
}
</style>
