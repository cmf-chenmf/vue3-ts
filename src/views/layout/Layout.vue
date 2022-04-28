<script setup lang="ts">
import { mainStore } from '@/store'
import { storeToRefs } from 'pinia'
const useStore = mainStore();
const { collapse } = storeToRefs(useStore);
</script>

<template>
  <div class="layout">
		<el-container>
      <el-aside :style="{'width':collapse ? '60px' : '256px'}"><Aside /></el-aside>
      <el-container>
        <el-header><Header /></el-header>
				 <el-scrollbar>
					 <el-main>
						 <p v-for="i in 50" :key="i">{{i}}---Main</p>
					 </el-main>
				 </el-scrollbar>
        <el-footer><Footer /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
$borderColor:#cecece;
.layout{
	display: flex;
	flex: 1;
	.el-header{
		display: flex;
		align-items: center;
		border-bottom:1px solid $borderColor;
		padding-left: 0;
	}
	.el-aside{
		// width: 256px;
		transition: all .3s;
		border-right:1px solid $borderColor;
	}
	.el-main{
		padding: 10px;
	}
	.el-footer{
		display: flex;
		height: 40px;
		align-items: center;
		border-top: 1px solid $borderColor;
	}
}
</style>
