<template>
  <div :class="buttonType">{{ text }}</div>
  <br />
  <span>{{ text }}</span>
  <br />
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    contentStr: {
      type: String,
    },
    buttonType: {
      type: String,
      default: "info",
    },
    hdTip: {
      type: String,
    },
  },
  data() {
    return {
      text: this.contentStr,
    };
  },
  watch: {
    contentStr(v) {
      console.log(v);
      this.text = v;
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
