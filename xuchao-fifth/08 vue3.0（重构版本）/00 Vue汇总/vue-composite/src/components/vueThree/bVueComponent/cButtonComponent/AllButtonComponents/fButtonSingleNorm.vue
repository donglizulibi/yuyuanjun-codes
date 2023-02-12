<template>
  <h5>父组件的props传过来的数据先在data里面存一下</h5>
  <h5>点击按钮之后出现loading延迟的效果</h5>
  <div :class="buttonType" @click="onClick">{{ text }}</div>
  <br />
  <span>{{ text }}</span
  ><br />
</template>

<script>
export default {
  props: {
    contentStr: {
      type: String,
    },
    buttonType: {
      type: String,
      default: "info",
    },
  },
  data() {
    return {
      text: this.contentStr,
    };
  },
  methods: {
    onClick() {
      console.log("this.contentStr:", this.contentStr);
      this.text = "loading...";
      setTimeout(() => {
        this.text = this.contentStr;
      }, 2000);
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
span {
  display: inline-block;
  margin-bottom: 10px;
}
</style>
