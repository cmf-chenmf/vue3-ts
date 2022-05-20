<script setup lang="ts">
import {ref} from 'vue';

const count = ref<number>(10)
console.log(count)
</script>

<template>
  <div class="layout-header">layout-header</div>
</template>

<style scoped lang="scss">
.layout-header {
  height: 55px;
  border: 1px solid #dcdfe6;
}
</style>