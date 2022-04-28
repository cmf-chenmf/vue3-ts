<script setup lang="ts">
import { reactive,onMounted } from "vue";
import { Data } from '@/api/api'

const state = reactive({
  obj: {},
});
onMounted(()=>{
	getDatsa()
})

const getDatsa = async () =>{
	const { data } = await Data.getLists();
	console.log(data);
}
const xhr = new XMLHttpRequest();
xhr.open("get", "/mock/news");
xhr.onreadystatechange = () => {
  if (xhr.status === 200 && xhr.readyState === 4) {
    state.obj = JSON.parse(xhr.response);
  }
};
xhr.send();
</script>

<template>
  <div class="footer">Footer{{ Object.keys(state.obj).length }}</div>
</template>

<style scoped lang="scss"></style>
