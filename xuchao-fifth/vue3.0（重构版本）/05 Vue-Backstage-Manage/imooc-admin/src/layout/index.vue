<template>
  <div
    class="app-warpper"
    :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']"
  >
    <!-- 左侧menu -->
    <sidebar
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    ></sidebar>
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
import variables from '@/styles/variables.module.scss'
import { onBeforeUpdate } from 'vue'
// import { onMounted } from 'vue'
// import { onUpdated } from 'vue'
import h1StateChecked from '@/utils/ref'
import { useStore } from 'vuex'
const store = useStore()
onBeforeUpdate(() => {
  if (h1StateChecked.value) {
    h1StateChecked.value = store.getters.sidebarOpened
  } else {
    setTimeout(() => {
      h1StateChecked.value = store.getters.sidebarOpened
    }, 150)
  }
})
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.module.scss';

.app-warpper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sideBarDuration};
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
