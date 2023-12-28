<template>
  <el-menu
    :collapse="!$store.getters.sidebarOpened"
    :default-active="activeMenu"
    :unique-opened="true"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    router
  >
    <!-- 子级 -->
    <!-- <el-submenu index="1"> -->
    <!-- <template #title> -->
    <!-- <i class="el-icon-location"></i> -->
    <!-- <el-icon><Location /></el-icon> -->
    <!-- <span>导航一</span> -->
    <!-- </template> -->

    <!-- <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu> -->

    <!-- 具体菜单 -->
    <!-- <el-menu-item index="2"> -->
    <!-- <template #title> -->
    <!-- <i class="el-icon-location"></i> -->
    <!-- <el-icon><Location /></el-icon> -->
    <!-- <span>导航4</span> -->
    <!-- </template> -->
    <!-- </el-menu-item> -->

    <sidebar-item
      v-for="item of routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// import { filterRoutes } from '@/utils/route'
import { filterRoutes, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'
import { useStore } from 'vuex'

const store = useStore()
console.log('sidebarmenuStore', store.getters.cssVar)

// 通过useRouter和getRoutes获得的路由表数组存在重复的数据
// 其中二级路由会直接存在于路由表数组中，也会在一级路由的children里面

// 另一个问题是，最后的路由表是动态生成导航菜单的依据，而这个路由表数组中
// 存在不必放在导航菜单中的 路由页面

const router = useRouter()
// console.log('router: ', router)
const routes = computed(() => {
  const filterRoutesData = filterRoutes(router.getRoutes())
  // console.log(filterRoutesData)
  return generateMenus(filterRoutesData)
})
// console.log(JSON.stringify(routes.value))
// console.log(routes.value)

// 拿到当前的路由
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<style lang="scss" scoped></style>
