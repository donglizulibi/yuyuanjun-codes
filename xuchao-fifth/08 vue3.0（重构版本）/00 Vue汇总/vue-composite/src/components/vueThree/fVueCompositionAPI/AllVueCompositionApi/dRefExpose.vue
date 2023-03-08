<template>
  <div>
    <h4>使用onMounted和ref获取子组件数据</h4>
    <a-ref-on-mounted></a-ref-on-mounted>
  </div>
</template>

<script>
import aRefOnMounted from "./dRefExposeChild/aRefOnMounted.vue";
export default {
  components: {
    aRefOnMounted,
  },
};
</script>

<style lang="scss" scoped></style>
