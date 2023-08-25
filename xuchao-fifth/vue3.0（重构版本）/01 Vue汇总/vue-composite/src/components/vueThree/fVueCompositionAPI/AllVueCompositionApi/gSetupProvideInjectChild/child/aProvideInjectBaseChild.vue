<template>
  <div>
    <p>这里是子组件</p>
    <a-provide-inject-base-grandchild></a-provide-inject-base-grandchild>
  </div>
</template>

<script>
import aProvideInjectBaseGrandchild from "../grandchild/aProvideInjectBaseGrandchild.vue";
export default {
  components: {
    aProvideInjectBaseGrandchild,
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: auto;
  width: 200px;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
