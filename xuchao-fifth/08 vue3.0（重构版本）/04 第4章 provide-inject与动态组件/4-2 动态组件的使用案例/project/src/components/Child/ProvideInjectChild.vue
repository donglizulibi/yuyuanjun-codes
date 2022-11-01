<template>
  <div class="div">
    <header>这里是子组件的区域</header>
    <provide-inject-grandchild />
  </div>
</template>

<script>
import ProvideInjectGrandchild from "../GrandSon/ProvideInjectGrandchild.vue";
export default {
  components: {
    ProvideInjectGrandchild,
  },
};
</script>

<style lang="scss" scoped>
.div {
  border: 2px solid green;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    display: block;
    text-align: start;
    width: 100%;
  }
}
</style>
