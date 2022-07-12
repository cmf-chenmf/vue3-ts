<script setup lang="ts">
import { onMounted } from "vue";
import { testStore } from '@/stores/test';
import { storeToRefs } from 'pinia';
import { Data } from '@/api/api'
import { cartStore } from '@/stores/cart'

const cart = cartStore();
// console.log(cart.getCount)
cart.setCount(10)
// console.log(cart.count)
/**
 * 使用下一代Vuex P-i-n-i-a;
 */
const store = testStore();
const { collapse } = storeToRefs(store);
// console.log(collapse.value)

/**
 * 使用封装请求 api（Data模块）
 */

const getData = async () => {
  const { data: result } = await Data.getLists();
  // console.log(result);
}

/**
 * 定义变量
 */
onMounted(async () => {
  await getData();
})
// console.log(import.meta.env.MODE)

</script>

<template>
  <el-scrollbar :always="true">
    <div class="layout-view">
      <header class="ly-header">
        <div class="navbar-wrapper">
          <div class="header-container">
            <HeaderView />
          </div>
        </div>
      </header>
      <el-scrollbar class="ly-aside" :always="true">
        <AsideView />
      </el-scrollbar>
      <main class="ly-main">
        <div class="ly-main-container">
          <div class="main-content">
            <router-view v-slot="{ Component }">
              <transition name="fade" mode="out-in">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
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
    position: fixed;
    width: 100%;
    padding: 0 32px;
    background-color: #fff;
    z-index: 1;

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
    overflow-y: auto;
    display: none;
  }

  /* main */
  .ly-main {
    padding-top: var(--header-height);
    height: calc(100% - var(--header-height));

    .ly-main-container {
      display: flex;
      padding: 40px 32px;

      .main-content {
        min-height: 100vh;
        border: 1px solid #cecece;
        padding: 20px;

        .fade-enter,
        .fade-leave-to {
          transform: scale(0.9);
          opacity: 0;
        }

        .fade-enter-to,
        .fade-leave {
          transform: scale(1);
          opacity: 1;
        }

        .fade-enter-active,
        .fade-leave-active {
          transition: all 0.3s;
        }
      }

      .main-aside {
        padding-left: 64px;
        border: 1px solid #cecece;
        display: none;

        .main-s-container {
          position: sticky;
          top: calc(var(--header-height) + 32px);
          margin-top: 0;
          padding: 4px 8px 4px 12px;
          margin-bottom: 32px;
          width: 200px;
          border: 1px solid #000;
        }
      }
    }

  }

  /**
  内容区域宽度
   */
  @media screen and(max-width: 768px) {
    .main-content {
      width: 100%;
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

    .ly-aside {
      display: none;
    }

    .ly-main {
      padding-left: calc(var(--sidebar-width-sm) + 10px);

      .ly-main-container {
        padding: 64px 32px 96px;
      }
    }
  }

  @media screen and(min-width: 960px) and(min-width: 1280px) {
    .ly-main {
      padding-left: calc(var(--ly-sidebar-width-small) - 6px);
    }

    .ly-aside {
      display: block;
    }
  }

  @media screen and (min-width: 960px) and (min-width: 1440px) {
    .ly-main {
      padding-left: calc((100% - var(--ly-screen-max-width)) / 2 + var(--ly-sidebar-width-small));
    }
  }

  /**
      适配最小宽度 1440px
   */
  @media screen and (min-width: 1440px) {
    .ly-aside {
      padding: 48px 32px 96px calc((100% - var(--ly-screen-max-width)) / 2);
      width: calc((100% - var(--ly-screen-max-width)) / 2 + var(--ly-sidebar-width-small));
    }

    .main-aside {
      display: block !important;
    }

    .main-content {
      width: var(--ly-content-width);
    }

    .ly-main {
      .ly-main-container {
        padding: 40px 0 96px 64px;
      }
    }
  }

  @media screen and (min-width: 1680px) {
    .ly-main {
      .ly-main-container {
        padding: 40px 0 96px 96px;

        .main-aside {
          padding-left: 96px;
          display: block;
        }
      }
    }
  }

}
</style>
