<template>
  <div>
    1 在Vue3中注册全局组件

    <br />
    &nbsp;&nbsp;&nbsp;还是要先用Vue的createApp对象创造出app实例
    <br />
    &nbsp;&nbsp;&nbsp;然后调用实例的component方法来注册全局组件
    <br />
    <br />
    2 在Vue2中则是直接使用Vue的component方法
    <br />
    <br />

    &nbsp;&nbsp;&nbsp;二者在调用component方法的时候都是填入两个参数
    <br />
    &nbsp;&nbsp;&nbsp;第一个参数填这个全局组件的名字
    <br />

    &nbsp;&nbsp;&nbsp;第二个填入这个组件的配置参数

    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div {
  padding-left: 50px;
  text-align: left;
  width: 400px;
  margin: auto;
}
</style>
