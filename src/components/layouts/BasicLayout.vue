<script setup lang="ts"></script>

<template>
  <div class="basic-layout">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light"/>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light"/>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"/>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"/>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"/>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"/>
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

.bg-purple-dark {
  background-color: #99a9bf;
}

.bg-purple-light {
  background-color: #e5e9f2;
}

.bg-purple {
  background-color: #9b59b6;
}
</style>