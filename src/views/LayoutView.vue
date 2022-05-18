<script setup lang="ts">
import {ref, onMounted} from "vue";
import {mainStore} from '@/store';
import {storeToRefs} from 'pinia';
// import {Data} from '@/api/api'

/**
 * 使用下一代Vuex P-i-n-i-a;
 */
const store = mainStore();
const {collapse} = storeToRefs(store);
console.log(collapse)

/**
 * 使用封装请求 api（Data模块）
 */

// const getData = async () => {
//   const {data: result} = await Data.getLists();
//   console.log(result);
// }

/**
 * 定义变量
 */
const html = ref<any>(null);
onMounted(async () => {
  html.value = document.getElementsByTagName('html')[0];
  // await getData();
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
  <el-scrollbar>
    <div class="layout-view">
      <header class="ly-header" @click="toggleTheme">
        <div class="navbar-wrapper">
          <div class="header-container">Header</div>
        </div>
      </header>
      <aside class="ly-aside">Aside</aside>
      <main class="ly-main">
        <div class="ly-main-container">
          <div class="main-content">main-content</div>
          <div class="main-aside">
            <div class="main-s-container">main-s-container</div>
          </div>
        </div>
      </main>
    </div>
  </el-scrollbar>
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
    padding: 0 32px;
    background-color: #fff;

    .navbar-wrapper {
      height: 100%;
      max-width: calc(var(--ly-screen-max-width));
      margin: 0 auto;
    }
  }

  /* aside */
  .ly-aside {
    position: fixed;
    top: var(--header-height);
    left: 0;
    height: 100%;
    padding: 48px 32px 0;
    width: 260px;
    border: 1px solid #dcdfe6;
  }

  /**
      适配最小宽度
   */
  @media screen and (min-width: 1440px) {
    .ly-aside {
      padding: 48px 32px 96px calc((100% - var(--ly-screen-max-width)) / 2);
      width: calc((100% - var(--ly-screen-max-width)) / 2 + var(--ly-sidebar-width-small));
    }
  }

  /* main */
  .ly-main {
    padding-top: var(--header-height);
    padding-left: 260px;
    height: calc(100% - var(--header-height));

    .ly-main-container {
      display: flex;
      padding: 64px 0 96px 64px;

      .main-content {
        min-height: 100vh;
        border: 1px solid #cecece;
        height: 3000px;
      }

      .main-aside {
        padding-left: 64px;
        border: 1px solid #dcdfe6;

        .main-s-container {
          position: sticky;
          top: calc(var(--header-height) + 32px);
          margin-top: 0;
          padding: 4px 8px 4px 12px;
          margin-bottom: 32px;
          width: 200px;
          border: 1px solid #dcdfe6;
        }
      }
    }

  }

  @media screen and(min-width: 768px) {
    .main-content {
      padding: 48px 32px 96px;
      width: 100%;
    }
  }

  @media screen and(min-width: 960px) {
    .main-content {
      padding: 64px 64px 96px;
      width: 100%;
    }
  }
  @media screen and (min-width: 960px) and (min-width: 1440px) {
    .ly-main {
      padding-left: calc((100% - var(--ly-screen-max-width)) / 2 + var(--ly-sidebar-width-small));
    }
  }

  .main-aside {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    .main-aside {
      display: block;
    }
    .main-content {
      width: var(--ly-content-width);
    }
  }
  @media screen and (min-width: 1680px) {
    .main-aside {
      padding-left: 96px;
      display: block;
    }
  }

}
</style>