<template>
  <div class="c-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <template v-if="item.type == 'input' || item.type == 'password'">
              <el-form-item :label="item.label" :style="itemStyle" :rules="item.rules">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type == 'password'"
                  v-bind="item.otherOptions"
                />
              </el-form-item>
            </template>

            <template v-if="item.type == 'select'">
              <el-form-item :label="item.label" :style="itemStyle" :rules="item.rules">
                <el-select :placeholder="item.placeholder" :style="{ width: '100%' }" v-bind="item.otherOptions">
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.title"
                    :value="option.value"
                  /> </el-select
              ></el-form-item>
            </template>

            <template v-if="item.type == 'datepicker'">
              <el-form-item :label="item.label" :style="itemStyle" :rules="item.rules">
                <el-date-picker type="daterange" unlink-panels range-separator="To" v-bind="item.otherOptions" />
              </el-form-item>
            </template>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import type { IFormItems } from '../types/type';
defineProps({
  formItems: {
    type: Array as PropType<IFormItems[]>,
    default: () => []
  },
  labelWidth: {
    type: String,
    default: '120px'
  },
  itemStyle: {
    type: Object,
    default: () => ({ padding: '10px 40px' })
  },
  colLayout: {
    type: Object,
    default: () => ({
      xl: 6,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
});
</script>

<style scoped lang="scss">
.c-form {
  padding-top: 22px;
}
</style>
