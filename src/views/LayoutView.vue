<script setup lang="ts">
import {ref, onMounted} from "vue";

const html = ref<any>(null);
onMounted(() => {
  html.value = document.getElementsByTagName('html')[0];
})
/**
 * 简单修改主题
 */
const toggleTheme = () => {
  const bool = html.value.classList.contains("dark");
  !bool ? html.value.classList.add("dark") : html.value.classList.remove("dark");
}
</script>

<template>
  <div class="layout-view">
    <header class="ly-header" @click="toggleTheme">Header</header>
    <aside class="ly-aside">Aside</aside>
    <main class="ly-main">Main</main>
  </div>
</template>

<style scoped lang="scss">
.layout-view {
  /* header */
  .ly-header {
    height: var(--header-height);
    border-bottom: 1px solid #dcdfe6;
    position: fixed;
    width: 100%;
  }

  /* aside */
  .ly-aside {
    position: fixed;
    top: var(--header-height);;
    left: 0;
    width: 260px;

  }

  /* main */
  .ly-main {
    padding-top: var(--header-height);
    padding-left: 260px;
  }
}
</style>