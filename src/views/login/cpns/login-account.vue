<template>
  <div class="login-account">
    <el-form :model="account" :rules="rules" label-width="4rem" ref="fromRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import lc from '@/Utitls/cache';
import type { FormInstance } from 'element-plus';
import { defineExpose, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { rules } from '../config/account-config';
const store = useStore();

const account = reactive({
  name: lc.getCache('name') ?? '',
  password: lc.getCache('password') ?? ''
});

const fromRef = ref<FormInstance>();
function loginActive(isKeepPassword: boolean) {
  fromRef.value?.validate((valid) => {
    //是否通过校验
    if (valid) {
      //是否记住密码
      if (isKeepPassword) {
        lc.setCache('name', account.name);
        lc.setCache('password', account.password);
      } else {
        lc.deteleCache('name');
        lc.deteleCache('password');
      }

      //登录逻辑
      store.dispatch('login/accountLoginActive', { ...account });
    }
  });
}
defineExpose({ loginActive });
</script>

<style scoped lang="scss"></style>
