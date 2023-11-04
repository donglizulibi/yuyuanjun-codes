<template>
  <div class="app-warpper">
    <!-- 左侧menu -->
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部 navbar -->
        <Navbar />
      </div>
      <!-- 内容区域 -->
      <app-main></app-main>
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain.vue'
</script>

<style lang="scss" scoped></style>
