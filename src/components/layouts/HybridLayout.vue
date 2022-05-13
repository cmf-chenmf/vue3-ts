<script setup lang="ts"></script>

<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"/>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"/>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.bg-purple {
  background-color: #9b59b6;
}
</style>