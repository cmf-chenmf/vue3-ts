<script setup lang='ts'>


</script>

<template>
  <div class="design">
    <div class="layout-item">
      <p>基础布局</p>
      <BasicLayout></BasicLayout>
    </div>
    <div class="layout-item">
      <p>分栏间隔</p>
      <SpaceLayout></SpaceLayout>
    </div>
    <div class="layout-item">
      <p>混合布局</p>
      <HybridLayout></HybridLayout>
    </div>
    <div class="layout-item">
      <p>列偏移</p>
      <OffsetLayout></OffsetLayout>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.design {
  display: flex;
  flex-direction: column;

  .layout-item {
    border: 1px solid #dcdfe6;
    margin: 5px 10px;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 4px;

    P {
      margin: 0 0 25px 0;
    }
  }
}
</style>