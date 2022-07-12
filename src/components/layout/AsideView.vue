<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();
const route = useRoute();
// console.log(router)
// 左上logo跳转事件
const leaveEvent = (value: string) => {
  const href = value === 'vue' ? "https://v3.cn.vuejs.org/" : "https://cn.vitejs.dev/"
  window.open(href, "_blank")
}

</script>

<template>
  <div class="aside-view">
    <div class="logo">
      <div class="vue-logo" title="渐进式JavaScript 框架" @click="leaveEvent('vue')">
        <img src="../../assets/img/vue-logo.svg" alt="vue-logo" title="vue-logo">
        <p>渐进式JavaScript 框架</p>
      </div>
      <div class="vite-logo" title="下一代前端开发与构建工具" @click="leaveEvent('vite')">
        <img src="../../assets/img/vite-logo.svg" alt="vite-logo" title="vite-logo">
        <p>下一代前端开发与构建工具</p>
      </div>
    </div>
    <el-menu class="el-menu-demo" router :default-active="route.fullPath">
      <el-menu-item index="/index">首页</el-menu-item>
      <el-menu-item index="/echarts">Echarts展示</el-menu-item>
      <el-menu-item index="/form">表单页</el-menu-item>
      <el-sub-menu index="/result">
        <template #title>
          <span>结果页</span>
        </template>
        <el-menu-item index="/result/success">成功页</el-menu-item>
        <el-menu-item index="/result/fail">失败页</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.aside-view {
  .logo {

    .vue-logo,
    .vite-logo {
      margin: 8px 0;
      border: 1px solid #dcdfe6;
      padding: 10px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;

      img {
        width: 40px;
        height: 40px;
      }

      p {
        padding-left: 10px;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }

  .el-menu {
    border: none;
  }
}
</style>
