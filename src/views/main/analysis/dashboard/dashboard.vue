<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <c-card title="分类商品数量（饼图）">
          <pie-echart :pie-data="categoryGoodsCount"></pie-echart>
        </c-card>
      </el-col>
      <el-col :span="10">
        <c-card title="不同城市商品销量">
          <map-echart :map-data="addressGoodsSale" />
        </c-card>
      </el-col>
      <el-col :span="7">
        <c-card title="分类商品数量（玫瑰图）">
          <rose-echart :rose-data="categoryGoodsCount"></rose-echart>
        </c-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <c-card title="分类商品销量">
          <line-echart :line-data="categoryGoodsSale" />
        </c-card>
      </el-col>
      <el-col :span="12">
        <c-card title="分类商品收藏">
          <bar-echart :bar-data="categoryGoodsFavor" />
        </c-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import CCard from '@/base-ui/Card/c-card.vue';
import { barEchart, lineEchart, mapEchart, pieEchart, roseEchart } from '@/components/page-echarts';
import { useStore } from '@/store';
import { computed } from 'vue';
const store = useStore();

store.dispatch('dashboard/getPageList');

//分类商品数量
const categoryGoodsCount = computed(() => {
  return store.state.dashboard.categoryGoodsCount.map((item: any) => ({
    name: item.name,
    value: item.goodsCount
  }));
});
//分类商品销量
const categoryGoodsSale = computed(() => {
  let xAxis: string[] = [];
  let value: string[] = [];
  store.state.dashboard.categoryGoodsSale.forEach((item: { id: string; name: string; goodsCount: string }) => {
    xAxis.push(item.name);
    value.push(item.goodsCount);
  });
  return { xAxis, value };
});
//分类商品收藏
const categoryGoodsFavor = computed(() => {
  let xAxis: string[] = [];
  let value: string[] = [];
  store.state.dashboard.categoryGoodsFavor.forEach((item: { id: string; name: string; goodsFavor: string }) => {
    xAxis.push(item.name);
    value.push(item.goodsFavor);
  });
  return { xAxis, value };
});
// 不同城市商品销量
const addressGoodsSale = computed(() => {
  return store.state.dashboard.addressGoodsSale;
});
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
