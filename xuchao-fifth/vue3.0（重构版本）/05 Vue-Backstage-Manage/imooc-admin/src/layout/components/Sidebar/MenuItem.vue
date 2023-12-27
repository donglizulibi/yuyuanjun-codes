<template>
  <div class="menu-item-container">
    <!-- element icon -->
    <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i>
    <!-- 非element icon -->
    <svg-icon v-else :icon="icon"></svg-icon>
    <!-- 文本 -->
    <span>{{ title }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import SvgIcon from '@/components/SvgIcon'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})

// console.log('menuitem: ', props)
</script>

<style lang="scss" scoped>
.menu-item-container {
  display: flex;
  align-items: center;
}
</style>
