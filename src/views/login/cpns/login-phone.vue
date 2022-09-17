<template>
  <div class="login-account">
    <el-form :model="account" :rules="rules" label-width="4rem">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { rules } from '../config/account-config';
const account = reactive({
  name: '',
  password: ''
});
</script>

<style scoped lang="scss"></style>
