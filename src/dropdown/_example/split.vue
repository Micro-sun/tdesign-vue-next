<template>
  <t-dropdown :options="options" :min-column-width="88">
    <t-button theme="default" variant="outline"> 下拉菜单 </t-button>
  </t-dropdown>
</template>
<script setup>
const options = [
  { content: '操作一', value: 1 },
  { content: '操作二', value: 2 },
  { content: '操作三', value: 3, divider: true },
  { content: '操作四', value: 4 },
];
</script>
