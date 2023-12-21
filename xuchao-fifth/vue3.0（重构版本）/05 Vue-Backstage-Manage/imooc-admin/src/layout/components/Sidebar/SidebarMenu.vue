<template>
  <el-menu
    :unique-opened="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- 子级 -->
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <!-- <el-icon><Location /></el-icon> -->
        <span>导航一</span>
      </template>

      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu>

    <!-- 具体菜单 -->
    <el-menu-item index="2">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航4</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script setup></script>

<style lang="scss" scoped></style>
