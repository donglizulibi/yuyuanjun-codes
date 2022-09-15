<template>
  <div>
    <h4>显示后备内容</h4>
    <button-back-child></button-back-child>
    <br />
    <h4>显示父组件顶替内容</h4>
    <button-back-child>父组件自生的数据</button-back-child>
  </div>
</template>

<script>
import ButtonBackChild from "./Child/ButtonBackChild.vue";
export default {
  components: { ButtonBackChild },
};
</script>

<style lang="scss" scoped>
.hd {
  background-color: aqua;
}
</style>
