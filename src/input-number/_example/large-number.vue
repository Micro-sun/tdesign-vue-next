<template>
  <div class="tdesign-demo-block-column-large">
    <div>
      <t-input-number v-model="value1" large-number :decimal-places="2" step="1" style="width: 300px"></t-input-number>
    </div>

    <div>
      <t-input-number v-model="value2" large-number step="0.888" style="width: 300px"></t-input-number>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('19999999999999999');
const value2 = ref('0.8975527383412673418');
</script>
