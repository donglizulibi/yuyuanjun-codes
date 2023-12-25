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
import { Location } from '@element-plus/icons'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
// import { filterRoutes } from '@/utils/route'
import { filterRoutes, generateMenus } from '@/utils/route'

// 通过useRouter和getRoutes获得的路由表数组存在重复的数据
// 其中二级路由会直接存在于路由表数组中，也会在一级路由的children里面

// 另一个问题是，最后的路由表是动态生成导航菜单的依据，而这个路由表数组中
// 存在不必放在导航菜单中的 路由页面

const router = useRouter()
const routes = computed(() => {
  const filterRoutesData = filterRoutes(router.getRoutes())
  console.log(filterRoutesData)
  return generateMenus(filterRoutesData)
})
// console.log(JSON.stringify(routes.value))
console.log(routes.value)
</script>

<style lang="scss" scoped></style>
