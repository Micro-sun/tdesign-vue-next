<template>
  <div>
    <!-- 选项过多时，可折叠 -->
    <t-select v-model="value" placeholder="请选择" multiple :min-collapsed-num="minCollapsedNum" :options="options" />
    <br /><br />

    <!-- 自定义折叠项内容，collapsedItems 为渲染函数 (value, count, collapsedSelectedItems) -->
    <t-select
      v-model="value"
      placeholder="请选择"
      multiple
      :min-collapsed-num="minCollapsedNum"
      :collapsed-items="collapsedItems"
      :options="options"
    />
    <br /><br />

    <!-- 自定义折叠项内容，collapsedItems 为 插槽(slot) { value, count, collapsedSelectedItems }-->
    <t-select v-model="value" placeholder="请选择" multiple :min-collapsed-num="minCollapsedNum" :options="options">
      <!-- hover展示折叠部分的已选项 -->
      <template #collapsedItems="{ collapsedSelectedItems, count }">
        <t-popup>
          <template #content>
            <p v-for="(item, index) in collapsedSelectedItems" :key="index" style="padding: 10px">
              {{ item.label }}
            </p>
          </template>
          <span v-show="count > 0" style="color: #00a870">+{{ count }}</span>
        </t-popup>
      </template>
    </t-select>
  </div>
</template>
<script setup lang="jsx">
import { ref } from 'vue';

const options = [
  {
    label: '选项一',
    value: '1',
  },
  {
    label: '选项二',
    value: '2',
  },
  {
    label: '选项三',
    value: '3',
  },
];

const value = ref(['1', '3']);
const minCollapsedNum = 1;
const collapsedItems = (h, { value, count }) => {
  if (!(value instanceof Array) || !count) return;
  return (
    <t-popup
      v-slots={{
        content: () => {
          value.map((item) => <p style="padding: 10px;">{item.label}</p>);
        },
      }}
    >
      <span v-show={count > 0} style="color: #ED7B2F;">
        +{count}
      </span>
    </t-popup>
  );
};
</script>
