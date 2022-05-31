<script lang="ts" setup>
import { computed } from 'vue';

//图表数据(highcharts)
const chartOptions = computed(() => ({
  //消除辅助功能警告
  accessibility: { enabled: false },
  //隐藏右下角官网地址
  credits: { enabled: false },
  //图表的类型
  chart: { type: 'column' },
  //图表的正标题
  title: { text: '月平均降雨量' },
  //图表的副标题
  subtitle: { text: '资料来源网络' },
  xAxis: {
    categories: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
    ]
  },
  yAxis: {
    min: 0,
    title: {
      text: '降雨量 (mm)'
    }
  },
  //悬浮显示
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      borderWidth: 0
    }
  },
  series: [{
    type: 'column',
    colorByPoint: true,
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
    showInLegend: false
  }]
}));
</script>

<template>
  <div class="echarts-view">
    <div class="column">
      <vue-highchart type="chart" :options="chartOptions" :redrawOnUpdate="true" :oneToOneUpdate="false"
                     :animateOnUpdate="true" :accessibility.enabled="false"></vue-highchart>
    </div>
  </div>
</template>

<style scoped lang="scss">
.echarts-view {
  ::v-deep .highcharts-container {
    z-index: -1;
  }
}
</style>
