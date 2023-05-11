<template>
  <div></div>

  <h5>父组件样式影响子组件，需要取消父组件的scoped</h5>
  <div :class="$attrs.class">hdcms</div>

  <h5>两组样式分别来自于data和computed</h5>
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
