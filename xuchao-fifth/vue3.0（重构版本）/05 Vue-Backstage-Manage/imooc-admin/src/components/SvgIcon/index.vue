<template>
  <div>
    <!-- 一个专门用于展示图标的组件 -->

    <!-- 展示外部图标 -->
    <div
      v-if="isExternal"
      :style="styleExternalIcon"
      :class="className"
      class="svg-external-icon svg-icon"
    ></div>

    <svg v-else class="svg-icon" :class="className" aria-hidden="true">
      <use :xlink:href="iconName" />
    </svg>
    <!-- <div v-else>asdf</div> -->

    <!-- 展示内部图标 -->
  </div>
</template>

<script setup>
import { isExternal as external } from '@/utils/validate'
import { defineProps, computed } from 'vue'
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  }
})

/**
 *   判断当前图标是否为外部图标
 *    创建一个外部方法
 */
const isExternal = computed(() => {
  // console.log(props.icon)
  // console.log(external(props.icon))
  return external(props.icon)
})

/**
 *   外部图标样式
 *    外部图标样式可能不一样，需要统一进行样式处理
 *  */
const styleExternalIcon = computed(() => {
  return {
    mask: `url(${props.icon}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${props.icon}) no-repeat 50% 50%`
  }
})

/* *
 *   内部图标
 *      只需要添加一个前缀就可以
 */

const iconName = computed(() => {
  return `#icon-${props.icon}`
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
