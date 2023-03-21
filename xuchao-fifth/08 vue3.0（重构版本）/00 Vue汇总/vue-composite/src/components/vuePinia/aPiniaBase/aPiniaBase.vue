<template>
  <div>
    <h3>安装</h3>
    <h4>1 安装 npm install pinia 或者 yarn add pinia</h4>
    <h4>2 在main.js中从pinia包中引入createPinia函数</h4>
    <h4>3 使用createPinia函数创建pinia实例</h4>
    <h4>4 调用Vue根实例的use方法，传入pinia实例</h4>
    <h3>使用</h3>
    <h4>1 在src目录下建立store文件夹</h4>
    <h4>2 在store中的四个操作</h4>
    <h5>1）定义容器</h5>
    <h5>2）使用容器中的state</h5>
    <h5>3）修改state</h5>
    <h5>4）容器中的action的使用</h5>
    <h4>数据：{{ mianStore.count }}</h4>
  </div>
</template>

<script setup>
import useMainStore from "../../../store/index";
const mianStore = useMainStore();
console.log(mianStore);
console.log(mianStore.count);
</script>

<style lang="scss" scoped></style>
