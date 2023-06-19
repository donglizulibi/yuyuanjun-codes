<template>
  <div></div>

  <h5>如果父组件样式没有scoped，则其样式会影响子组件</h5>
  <div :class="$attrs.class">hdcms</div>

  <h5>两组样式分别来自于data和computed，样式使用对象表示</h5>
  <div :style="[hdStyles, comStyles]">asdf</div>
</template>

<script>
export default {
  data() {
    return {
      hdStyles: {
        border: "solid 3px black",
      },
    };
  },
  computed: {
    comStyles() {
      return {
        color: "red",
        fontWeight: "bold",
        backgroundColor: "grey",
        // 后两个样式属性用驼峰式
      };
    },
  },
};
</script>

<style lang="scss" scoped></style>
