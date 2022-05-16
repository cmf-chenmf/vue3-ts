<script setup lang="ts">
import {ref, onMounted} from "vue";
import {mainStore} from '@/store';
import {storeToRefs} from 'pinia';
import {Data} from '@/api/api'

/**
 * 使用下一代Vuex P-i-n-i-a;
 */
const store = mainStore();
const {collapse} = storeToRefs(store);
console.log(collapse)

/**
 * 使用封装请求 api
 */
const getData = async () => {
  const {data: result} = await Data.getLists();
  console.log(result)
}

/**
 * 定义变量
 */
const html = ref<any>(null);
onMounted(async () => {
  html.value = document.getElementsByTagName('html')[0];
  await getData();
})
/**
 * 简单修改主题  项目进行中将使用到 : root 来切换主题
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
  height: 100%;
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
    height: 100%;
    width: 260px;
    border-right: 1px solid #dcdfe6;
  }

  /* main */
  .ly-main {
    padding-top: var(--header-height);
    padding-left: 260px;
    height: calc(100% - var(--header-height));
  }
}
</style>