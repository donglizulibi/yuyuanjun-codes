<template>
  <h6>使用v-bind="$attrs"将点击事件传递下去</h6>
  <h6>v-bind="$attrs"可以绑定在子组件中的多个元素上</h6>
  <div :class="buttonType" v-bind="$attrs">{{ text }}</div>
  <br />
  <button v-bind="$attrs">子组件的按钮</button>
  <br />
  <br />

  <!-- 如果要去掉v-bind，要保证template里只有一个div元素 -->
  <!-- <div :class="buttonType">{{ text }}</div> -->
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    // click: {
    //   type: Function,
    //   validator(v) {
    //     console.log(v);
    //     return v;
    //   },
    // },
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
  watch: {
    contentStr(v) {
      console.log(v);
      this.text = v;
    },
  },
  methods: {},
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
