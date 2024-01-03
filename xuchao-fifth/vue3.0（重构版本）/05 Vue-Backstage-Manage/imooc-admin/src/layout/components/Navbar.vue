<template>
  <div class="navbar">
    <div class="left-menu">
      <Hamburger class="hamburger-container" />
      <Breadcrumb class="breadcrumb-container" />
    </div>
    <div class="right-menu">
      <lang-select class="lang-container"></lang-select>
      <!-- 国际化 -->
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar
            shape="square"
            :size="40"
            :src="$store.getters.userInfo.avatar"
          >
          </el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>主页</el-dropdown-item>
            </router-link>
            <a target="__blank" href="#">
              <el-dropdown-item>课程主页</el-dropdown-item>
            </a>
            <!-- <el-divider></el-divider> -->
            <el-dropdown-item divided @click="logout"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import Hamburger from '@/components/Hamburger/index'
import Breadcrumb from '@/components/Breadcrumb/index'
import LangSelect from '@/components/LangSelect/index'
const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  justify-content: space-between;
  .left-menu {
    display: flex;
    .hamburger-container {
      cursor: pointer;
      line-height: 46px;
      height: 100%;
      transition: background 0.5s;
      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }

  .right-menu {
    display: flex;
    align-items: center;
    padding-right: 16px;

    :deep(.lang-container) {
      font-size: 24px;
      display: inline-block;
      padding: 0 18px 0 0;
      color: #5a5e66;
      &:hover {
        cursor: pointer;
      }
    }
    :deep(.avatar-container) {
      cursor: pointer;
      margin-left: 5px;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          // 去除头像图片的背景色
          --el-avatar-background-color: none;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
