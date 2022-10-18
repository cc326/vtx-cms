<template>
  <div class="c-form">
    <slot name="header"></slot>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <template v-if="item.type == 'input' || item.type == 'password'">
              <el-form-item v-if="!item.isHidden" :label="item.label" :style="itemStyle" :rules="item.rules">
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type == 'password'"
                  v-bind="item.otherOptions"
                  v-model="formData[item.field]"
                />
              </el-form-item>
            </template>

            <template v-if="item.type == 'select'">
              <el-form-item :label="item.label" :style="itemStyle" :rules="item.rules">
                <el-select
                  :placeholder="item.placeholder"
                  :style="{ width: '100%' }"
                  v-bind="item.otherOptions"
                  v-model="formData[item.field]"
                >
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
                <el-date-picker
                  type="daterange"
                  unlink-panels
                  range-separator="To"
                  v-bind="item.otherOptions"
                  v-model="formData[item.field]"
                />
              </el-form-item>
            </template>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="foodter"></slot>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, PropType, ref, watch } from 'vue';
import type { IFormItems } from '../types/type';
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
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
      xl: 8,
      lg: 8,
      md: 12,
      sm: 24,
      xs: 24
    })
  }
});

//双向绑定formData
const emit = defineEmits(['update:modelValue']);
const formData = ref({ ...props.modelValue });

watch(
  formData,
  (newValue) => {
    emit('update:modelValue', newValue);
  },
  { deep: true }
);
</script>

<style scoped lang="scss">
.c-form {
  padding-top: 22px;
}
</style>
