<script setup lang='ts'>
import {Location,Document,Setting,Menu as IconMenu} from '@element-plus/icons-vue';
/**
 * 使用pinia替代vuex
 */
import { mainStore } from '@/store'
import { storeToRefs } from 'pinia'
const useStore = mainStore();
const { collapse } = storeToRefs(useStore);
console.log(collapse);


</script>

<template>
	<div class="aside">
		<div class="aside-header">Aside--Header</div>
		<div class="aside-menu">
			 <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="collapse">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>首页</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">表单页</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">表格页</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>图表页</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
		</div>
	</div>
</template>

<style scoped lang='scss'>
.aside{
	.aside-header{
		height: 60px;
		border-bottom: 1px solid #cecece;
		box-sizing: border-box;
	}
	.aside-menu{
		overflow-x: hidden;
		.el-menu{
			border: none;
		}
	}
}
</style>