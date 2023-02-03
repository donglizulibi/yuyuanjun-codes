<template>
  <div></div>
  <div>========间隔========</div>
  <div :class="$attrs.class">hdcms</div>
  <div class="class_style">
    <div>houdunren</div>
  </div>
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

<style lang="scss" scoped>
.class_style {
  color: red;
  height: 80px;
  border: 5px solid greenyellow;
  padding: 30px 0 0 0;
}
</style>
