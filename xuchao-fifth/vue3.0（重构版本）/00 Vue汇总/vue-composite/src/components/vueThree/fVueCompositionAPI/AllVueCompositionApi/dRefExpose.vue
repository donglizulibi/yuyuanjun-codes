<template>
  <div>
    <h4>使用onMounted和ref获取子组件数据</h4>
    <a-ref-on-mounted></a-ref-on-mounted>

    <h4>使用emits和ref获取子组件数据</h4>
    <b-ref-emits></b-ref-emits>

    <h4>使用expose限定子组件返回的数据</h4>
    <c-ref-expose></c-ref-expose>
  </div>
</template>

<script>
import aRefOnMounted from "./dRefExposeChild/aRefOnMounted.vue";
import bRefEmits from "./dRefExposeChild/bRefEmits.vue";
import cRefExpose from "./dRefExposeChild/cRefExpose.vue";
export default {
  components: {
    aRefOnMounted,
    bRefEmits,
    cRefExpose,
  },
};
</script>

<style lang="scss" scoped></style>
