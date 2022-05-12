<script setup lang="ts">
import {Expand, Fold} from "@element-plus/icons-vue";
import {mainStore} from "@/store";
import {storeToRefs} from "pinia";

const useStore = mainStore();
const {collapse} = storeToRefs(useStore);
/**
 * 修改菜单收缩状态
 */
const isCollapse = () => {
  useStore.collapse = !useStore.collapse;
};
</script>

<template>
  <div class="header">
    <div class="collapse" @click="isCollapse">
      <el-icon v-if="collapse">
        <expand/>
      </el-icon>
      <el-icon v-else>
        <fold/>
      </el-icon>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  display: flex;
  flex: 1;
  height: 100%;

  .collapse {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    width: 60px;
    cursor: pointer;

    &:hover {
      background-color: #ecf0f1;
    }
  }
}
</style>
