<script setup lang='ts'>
	import '@/mock'
	import {reactive} from 'vue'
	const state = reactive({
		obj:{}
	})
	const xhr = new XMLHttpRequest();
	xhr.open('get','/mock/news');
	xhr.onreadystatechange = ()=>{
		console.log(JSON.parse(xhr.response));
		state.obj = JSON.parse(xhr.response)
	}
	xhr.send();
</script>

<template>
	<div class="footer">Footer{{Object.keys(state.obj).length}}</div>
</template>

<style scoped lang='scss'>

</style>