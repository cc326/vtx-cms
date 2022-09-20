<template>
  <div class="nav-header">
    <el-icon :size="30" @click="handleFold"><component :is="isfold ? Expand : Fold"></component></el-icon>
    <div class="Breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>homepage</el-breadcrumb-item>
        <el-breadcrumb-item>a</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-avatar :size="30" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
      <el-dropdown>
        <span>
          {{ store.state.login.userInfo.name }}
          <el-icon>
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="outLogin">退出登录</el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store';
import lc from '@/Utitls/cache';
import { Expand, Fold } from '@element-plus/icons-vue';
import { defineEmits, ref } from 'vue';
import { useRouter } from 'vue-router';
const store = useStore();
const router = useRouter();
const emit = defineEmits(['foldChange']);

let isfold = ref(false);

function handleFold() {
  isfold.value = !isfold.value;
  emit('foldChange', isfold.value);
}

function outLogin() {
  lc.deteleCache('token');
  router.push('/login');
}
</script>

<style scoped lang="scss">
.nav-header {
  width: 100%;
  display: flex;
  align-items: center;
  text-align: left;
  .Breadcrumb {
    flex: 1;
    padding: 0 10px;
  }
  .right {
    display: flex;
    align-items: center;
    .el-dropdown {
      padding: 0 20px;
    }
  }
}
</style>
