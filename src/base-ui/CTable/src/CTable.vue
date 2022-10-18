<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table border :data="listData" style="width: 100%" @selection-change="selectionChange" v-bind="propChildren">
      <template v-if="showIndexCol"> <el-table-column type="selection" width="60" align="center" /></template>
      <template v-if="showSelectionCol">
        <el-table-column type="index" label="序号" width="60" align="center" />
      </template>
      <template v-for="(item, index) in propList" :key="index">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">{{ scope.row[`${item.prop}`] }} </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer" v-if="showFooter">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IPropList } from '@/base-ui/CTable';
import { defineEmits, defineProps, PropType } from 'vue';
const props = defineProps({
  listData: {
    type: Array,
    required: true
  },
  listCount: {
    type: Number,
    required: true
  },
  page: {
    type: Object,
    default: () => ({ currendPage: 0, pageSize: 2 })
  },
  propList: {
    type: Array as PropType<IPropList[]>
  },
  showIndexCol: Boolean,
  showSelectionCol: Boolean,
  showFooter: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ''
  },
  //是否展示树形结构
  propChildren: {
    type: Object,
    default: () => ({})
  }
});
const emit = defineEmits(['selectionChange', 'update:page']);

function selectionChange(value: any) {
  emit('selectionChange', value);
}

const handleCurrentChange = (currentPage: number) => {
  emit('update:page', { ...props.page, currentPage });
};
const handleSizeChange = (pageSize: number) => {
  emit('update:page', { ...props.page, pageSize });
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;

  .el-pagination {
    text-align: right;
  }
}
</style>
