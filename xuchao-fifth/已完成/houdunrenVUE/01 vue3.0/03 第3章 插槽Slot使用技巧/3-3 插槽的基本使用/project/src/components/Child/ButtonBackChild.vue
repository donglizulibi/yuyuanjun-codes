<template>
  <div>
    <slot>
      <!--  -->
      {{ content }}
      <div class="back">子组件插槽的后备内容（标签）</div>
      <hd-button>子组件插槽的后备内容（组件）</hd-button>
    </slot>
  </div>
</template>

<script>
import HdButton from "../Tool/Button.vue";
export default {
  components: {
    HdButton,
  },
  data() {
    return { content: "子组件插槽的后备内容（数据）" };
  },
};
</script>

<style lang="scss" scoped>
.back {
  display: inline-block;
  border: 2px solid black;
  padding: 5px;
  border-radius: 5px;
}
</style>
