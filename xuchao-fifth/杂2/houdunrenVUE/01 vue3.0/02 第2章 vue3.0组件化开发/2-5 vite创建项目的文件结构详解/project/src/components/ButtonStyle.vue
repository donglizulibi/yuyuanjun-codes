<template>
  <!-- 这里只是想说明一下props里面的内容如果有默认值的化
  可以当普通数据一样展示出来，但是如果父组件传递了数据的话 
  还是会按照父组件的数据进行变化
  -->
  <span>{{ buttonType }}</span>

  <div :class="buttonType" :style="$attrs.style">{{ content }}</div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: "默认按钮",
    },
    buttonType: {
      type: String,
      default: "info",
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
