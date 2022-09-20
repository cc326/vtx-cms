<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="iscollapse ? '60px' : '220px'">
        <nav-menu :iscollapse="iscollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @fold-change="foldChange" />
        </el-header>
        <el-main class="page-content">
          <div class="page-view"><router-view></router-view></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavHeader from '@/components/nav-header/src/nav-header.vue';
import NavMenu from '@/components/nav-menu/src/nav-menu.vue';
import { ref } from 'vue';

let iscollapse = ref(false);
function foldChange(isfold: boolean) {
  iscollapse.value = isfold;
}
</script>

<style scoped lang="scss">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

.page-content {
  height: calc(100% - 48px);
  .page-view {
    background-color: #fff;
  }

  .content {
    background-color: #fff;
    border-radius: 8px;
  }
}
.el-aside {
  line-height: 28px !important;
}
.el-header,
.el-footer {
  display: flex;
  color: #333;
  text-align: center;
  align-items: center;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: #f0f2f5;
}
</style>
