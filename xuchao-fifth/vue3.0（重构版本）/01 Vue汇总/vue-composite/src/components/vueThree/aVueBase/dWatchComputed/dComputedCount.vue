<template>
  <div>
    <br />
    <h4>computed相关</h4>
    <h5>computed只有在其内部依赖了响应式数据的情况才会自动更新</h5>
    <computed-time></computed-time>

    <br />
    <h5>在computed里面使用访问器</h5>
    <computed-count></computed-count>
  </div>
</template>

<script>
import computedCount from "./dComputed/computedCount.vue";
import computedTime from "./dComputed/computedTime.vue";
export default {
  components: {
    computedTime,
    computedCount,
  },
};
</script>

<style lang="scss" scoped></style>
