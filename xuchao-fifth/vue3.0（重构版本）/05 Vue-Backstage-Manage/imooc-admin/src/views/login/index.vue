<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <!-- username -->
      <el-form-item prop="username">
        <span class="svg-container">
          <el-icon>
            <svg-icon icon="user"></svg-icon>
          </el-icon>
        </span>
        <el-input
          placeholder="username"
          name="username"
          type="text"
          v-model="loginForm.username"
        ></el-input>
      </el-form-item>

      <!-- password -->
      <el-form-item prop="password">
        <span class="svg-container">
          <!-- <el-icon>
            <avatar />
          </el-icon> -->
          <svg-icon icon="password"></svg-icon>
        </span>
        <el-input
          placeholder="password"
          name="password"
          :type="passwordType"
          v-model="loginForm.password"
        ></el-input>
        <span class="show-pwd">
          <span class="svg-container" v-on:click="onChangePwdType">
            <svg-icon
              :icon="passwordType === 'password' ? 'eye' : 'eye-open'"
            ></svg-icon>
          </span>
        </span>
      </el-form-item>

      <!-- 登录按钮 -->
      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        :loading="loading"
        @click="handlerLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { validatePassword } from './rules'
import { useStore } from 'vuex'

// 数据源
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})

// 验证规则
// 如果要给一个变量添加校验规则，则必须使用validator关键字
// 然后属性值是一个包含了rule, value 和 callback的函数
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项目'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})

// 处理密码框文本是显示密文或者明文
const passwordType = ref('password')

const onChangePwdType = () => {
  if (passwordType.value === 'password') {
    passwordType.value = 'text'
  } else {
    passwordType.value = 'password'
  }
}

// 处理登录
const loading = ref(false)
const store = useStore()
const loginFormRef = ref(null)
const handlerLogin = () => {
  // 1 进行表单校验
  console.log(loginFormRef.value.validate)
  console.log(store)
  loginFormRef.value.validate((valid) => {
    console.log(valid)
    if (!valid) return

    // console.log('login page-dispatch:', loginForm.value)

    // 2 触发登录动作
    loading.value = true
    // 分发dispatch，传入用户名和密码
    store
      .dispatch('user/login', loginForm.value)
      .then(() => {
        // console.log(999)
        loading.value = false
        // 3 进行登录后处理
      })
      .catch((err) => {
        console.log(err)
        loading.value = false
      })
  })
}
</script>

<style lang="scss" scoped>
// 这里要么去掉scoped，则整个组件下的元素，包括子元素都可以控制
// 如果要加上scoped，为了使得父组件定义的样式影响到子组件
// 要使用deep选择器，推荐使用:deep(<inner-selector>)
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  // height: 100vh;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    :deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba($color: black, $alpha: 0.1);
      border-radius: 5px;
      color: #454545;
    }

    :deep(.el-input) {
      display: inline-block;

      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        height: 47px;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        caret-color: $cursor;
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      display: inline-block;
    }

    .title-container {
      position: relative;
      .title {
        font-size: 26px;
        color: $light_gray;
        margin: 0 auto 40px auto;
        text-align: center;
        font-weight: bold;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
    }
  }
}
</style>
