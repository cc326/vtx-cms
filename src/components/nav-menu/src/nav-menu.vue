<template>
  <div class="nav-menu">
    <div class="logo">vue3-ts-CMS</div>
    <el-menu
      router
      :default-active="route.path"
      class="el-menu-vertical"
      background-color="#001529"
      :collapse="iscollapse"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in menus" :key="item.id">
        <template v-if="item.children && item.children.length">
          <el-sub-menu :index="item.url">
            <template #title>
              <el-icon> <component :is="eicon(item.icon)"></component> </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.url">
                <el-icon> <component v-if="subitem.icon" :is="eicon(subitem.icon)"></component> </el-icon>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.url">
            <el-icon> <component :is="eicon(item.icon)"></component> </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store';
import { defineProps } from 'vue';
import { useRoute } from 'vue-router';
const eicon = (val: string) => val.slice(8);
// 1.获取menus
const store = useStore();
const menus = store.state.login.userMenus;

//router
const route = useRoute();

//是否隐藏menu
defineProps({ iscollapse: { type: Boolean, default: false } });
</script>

<style scoped lang="scss">
.nav-menu {
  height: 100%;
  background-color: #001529 !important;

  .logo {
    height: 28px;
    padding: 12px 10px 8px 10px;
    font-size: 16px;
    font-weight: 700;
    color: white;
    text-align: center;
  }

  // 目录
  .el-menu {
    border-right: none !important;
  }
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #001529 !important;
    }
  }

  ::v-deep .el-sub-menu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #011b3a !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
