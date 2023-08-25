<template>
  <div :class="buttonType">
    <span v-if="hdTip">{{ hdTip }}</span>
    {{ content }}
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      //   default: "默认按钮",
      required: true,
    },
    buttonType: {
      type: String,
      default: "info",
    },
    hdTip: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: inline-block;
  margin: 10px;
  padding: 5px 10px;
  color: #fff;
  opacity: 0.6;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
  &:hover {
    opacity: 1;
  }
  &.info {
    background-color: rgba(221, 221, 221, 0.824);
  }
  &.success {
    background-color: green;
  }
  &.danger {
    background-color: red;
  }
}
</style>
