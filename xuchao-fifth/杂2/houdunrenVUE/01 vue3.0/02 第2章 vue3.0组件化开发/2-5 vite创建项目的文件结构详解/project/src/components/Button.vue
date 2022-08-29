<template>
  <div>{{ content }}</div>
  {{ arr }}
</template>

<script>
export default {
  // props: ["content"],
  props: {
    content: {
      type: String, // Boolean Number Function Object
      default: "默认按钮",
    },
    arr: {
      type: Object,
      // default: ["1", "2", "3"],
      // default() {
      //   return [1, 2, 3];
      // },
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: inline-block;
  margin: 10px;
  padding: 5px 10px;
  background-color: forestgreen;
  color: #fff;
  opacity: 0.6;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;
  &:hover {
    opacity: 1;
  }
}
</style>
