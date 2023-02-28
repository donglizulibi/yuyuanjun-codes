<template>
  <div>
    <h5>给插槽设置后备内容的方式是把插槽的单标签改成双标签</h5>
    <h5>然后在双标签内部设置后备内容</h5>
    <h4>后备内容的三种可能</h4>
    <button-back-child></button-back-child>
    <br />
    <h4>显示父组件顶替内容</h4>
    <button-back-child>这里是父组件自身的数据</button-back-child>
  </div>
</template>

<script>
import ButtonBackChild from "./cButtonBackChild/ButtonBackChild.vue";
export default {
  components: { ButtonBackChild },
};
</script>

<style lang="scss" scoped>
.hd {
  background-color: aqua;
}
</style>
