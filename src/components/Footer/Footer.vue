<script setup lang="ts">
import { reactive, onMounted,ref } from "vue";
/**
 * 引入请求模块
 */
import { Data } from "@/api/api";

const state = reactive({
  obj: {},
});
onMounted(() => {
  // getData();
  getText();
  // mockNews();
});

/**
 * 使用模块内的请求方法
 */
const getData = async () => {
  const { data } = await Data.getLists();
  // console.log(data);
};
const msg = ref<any>("");
const getText = async () =>{
  const result = await Data.getData()
  msg.value = result; 
}

/**
 * 请求mock.js创造的假数据，需要设置baseUrl为空
 */
// const mockNews = async () =>{
// 	const data = await Data.mockNews();
// 	console.log(data);
// }

// const xhr = new XMLHttpRequest();
// xhr.open("get", "/mock/news");
// xhr.onreadystatechange = () => {
//   if (xhr.status === 200 && xhr.readyState === 4) {
//     state.obj = JSON.parse(xhr.response);
//   }
// };
// xhr.send();
</script>

<template>
  <div class="footer">{{msg}}</div>
</template>

<style scoped lang="scss">
</style>
