<template>
  <div class="menu-item-container">
    <div class="icon-container">
      <!-- element icon -->
      <!-- <i v-if="icon.includes('el-icon')" class="sub-el-icon" :class="icon"></i> -->
      <div v-if="icon.includes('el-icon')" class="sub-el-icon">
        <el-icon size="14" class="el-icon">
          <component :is="iconTitle"></component>
        </el-icon>
      </div>
      <!-- 非element icon -->
      <svg-icon v-else :icon="icon"></svg-icon>
    </div>
    <!-- 文本 -->
    <span>{{ title }}</span>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import SvgIcon from '@/components/SvgIcon'
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})

const iconTitle = computed(() => {
  const reg = /(?<=el-icon-).+/gi
  return props.icon.match(reg)[0]
})
</script>

<style lang="scss" scoped>
.menu-item-container {
  display: flex;
  align-items: center;
  overflow: hidden;
  .icon-container {
    margin-right: 16px;
    // position: absolute;
    .sub-el-icon {
      :deep(.el-icon) {
        margin-left: -4px;
        margin-right: 10px;
      }
    }
  }
}
</style>
