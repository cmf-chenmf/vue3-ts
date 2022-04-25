<script setup lang="ts"></script>

<template>
  <div class="layout">
		<el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
				 <el-scrollbar>
					 <el-main>
						 <p v-for="i in 50" :key="i">{{i}}</p>
					 </el-main>
				 </el-scrollbar>
        <el-footer>Footer</el-footer>
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
	}
	.el-aside{
		width: 256px;
		border-right:1px solid $borderColor;
	}
	.el-main{
		padding: 10px;
	}
	.el-footer{
		display: flex;
		align-items: center;
		border-top: 1px solid $borderColor;
	}
}
</style>
