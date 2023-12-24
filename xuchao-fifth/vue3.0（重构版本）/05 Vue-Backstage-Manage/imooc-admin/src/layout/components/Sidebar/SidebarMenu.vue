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
        <!-- <i class="el-icon-location"></i> -->
        <el-icon><Location /></el-icon>
        <span>导航4</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { Location } from "@element-plus/icons";

import { useRouter } from "vue-router";

const router = useRouter();
console.log(router.getRoutes());
// 通过useRouter和getRoutes获得的路由表数组存在重复的数据
//
</script>

<style lang="scss" scoped></style>
