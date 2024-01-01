<template>
  <div>
    <div class="logo-container" ref="logoContainer">
      <el-avatar
        shape="square"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
      ></el-avatar>
      <h1 class="logo-title" v-if="h1State">imooc-admin</h1>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu.vue'
// import { useStore } from 'vuex'
import { computed } from 'vue'
import h1StateChecked from '@/utils/ref'
// const logoHeight = 44

// const state = useStore()
const h1State = computed(() => {
  // console.log(h1StateChecked.value)
  // console.log('computed')
  // return state.getters.sidebarOpened
  return h1StateChecked.value
})
</script>

<style lang="scss" scoped>
.logo-container {
  // height: v-bind(logoHeight) + 'px';
  height: 44px;
  padding: 10px 0 22px 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo-title {
    color: #000;
    // margin-left: 10px;
    flex: 1;
    font-size: 16px;
    line-height: 50px;
  }
}
</style>
