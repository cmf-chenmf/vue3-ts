<script lang="ts" setup>
import * as echarts from 'echarts'
import { onMounted, computed, ref } from 'vue'

onMounted(() => {
  init();
  setTimeout(() => {
    data.value = [100, 156, 70, 98, 48, 100]
    init()
  }, 3000)
})
const data = ref([15, 15, 6, 15, 15, 64])
const chartOption = computed(() => ({
  title: {text: "标题"},
  tooltip: {},
  legend: {
    data: ["销量"]
  },
  yAxis: {},
  xAxis: {
    data: ["T恤", "衬衫", "裤子", "上衣", "鞋子", "袜子"]
  },
  series: [
    {
      name: "销量",
      type: "line",
      data: data.value,
    }
  ]
}))

//获取虚拟dom节点
const main = ref();

//此举是为了判断是否重复init
let myChart = ref<any>(null);
const init = () => {
  if (myChart.value === null) {
    myChart = echarts.init(main.value);
    console.log(Object.prototype.toString.call(myChart))
  }
  myChart.setOption(chartOption.value);
  //自适应大小
  window.onresize = () => {
    myChart.resize()
  }
}
</script>

<template>
  <div class="template">
    <div ref="main" id="main" style="height: 400px"></div>
  </div>
</template>

<style scoped lang="scss"></style>
