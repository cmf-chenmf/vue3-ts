<script setup lang="ts">
import {mainStore} from '@/store'
import {storeToRefs} from 'pinia'
import {onMounted} from 'vue'

const useStore = mainStore();
const {collapse} = storeToRefs(useStore);

/**
 * 修改窗口变化菜单自动收缩
 */
// const clientWidth = ref(document.body.clientWidth);
// watch(clientWidth,(newVal)=>{
// 	collapse.value = newVal <= 1010;
// })
/**
 * 添加浏览器被重置大小执行的事件(控制菜单收缩)
 */
const resizeWidth = () => {
  window.onresize = () => {
    // clientWidth.value = document.body.clientWidth;
    collapse.value = document.body.clientWidth <= 1010;
  }
}
//父组件中接收数据
const delivery = (params: string) => {
  console.log(params);
}
onMounted(() => {
  resizeWidth()
})
</script>

<template>
  <div class="layout">
    <el-container>
      <el-aside :style="{ 'width': collapse ? '64px' : '256px' }">
        <Aside :msg="'Hello Vue3 Typescript'" @delivery="delivery"/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-scrollbar>
          <el-main>
            <router-view/>
          </el-main>
        </el-scrollbar>
        <el-footer>
          <Footer/>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
$borderColor: #cecece;
$backgroundColor: #f0f2f5;

.layout {
  display: flex;
  flex: 1;
  background-color: $backgroundColor;

  .el-header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid $borderColor;
    padding-left: 0;
    background-color: #fff;
  }

  .el-aside {
    // width: 256px;
    transition: all .3s;
    border-right: 1px solid $borderColor;
    overflow-x: hidden;
    background-color: #fff;
  }

  .el-main {
    padding: 10px;
  }

  .el-footer {
    display: flex;
    height: 40px;
    align-items: center;
    border-top: 1px solid $borderColor;
  }

}
</style>
