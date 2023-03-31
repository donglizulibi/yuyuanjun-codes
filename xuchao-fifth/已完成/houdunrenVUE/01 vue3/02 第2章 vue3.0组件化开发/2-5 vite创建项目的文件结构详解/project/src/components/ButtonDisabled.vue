<template>
  <span>{{ buttonType }}</span>
  <!-- 后面一个disabled才是传递出去的值 -->
  <!-- <div :class="[buttonType, { disabled:disabled }]">{{ content }}</div> -->
  <div :class="[buttonType, { disabled }]">{{ content }}</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    content: {
      type: String,
      default: "默认按钮",
    },
    buttonType: {
      type: String,
      default: "info",
      validator(v) {
        console.log(v);
        let arr = ["success", "danger", "info"];
        let isInList = arr.includes(v);
        console.log(isInList);
        return isInList;
      },
    },
    disabled: {
      type: Boolean,
      default: false, // 默认不禁用
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: inline-block;
  margin: 10px;
  border: 2px solid black;
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
  &.disabled {
    // background-color: rgba(221, 221, 221, 0) !important;
    background-color: darkgrey;
    opacity: 1;
    cursor: not-allowed;
  }
}
</style>
