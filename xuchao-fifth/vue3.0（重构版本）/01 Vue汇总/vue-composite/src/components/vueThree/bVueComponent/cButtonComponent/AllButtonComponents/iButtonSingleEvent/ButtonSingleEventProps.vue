<template>
  <h6>在父组件上使用v-bind将函数作为标签属性传递下去</h6>
  <h6>在子组件中使用props接收到这个函数体，要主要type是props</h6>
  <h6>然后在子组件中使用v-on绑定点击事件，将函数体赋值给点击事件的变量</h6>
  <div :class="buttonType" @click="click">{{ text }}</div>
  <br />
  <span>子组件的区域接收到了： {{ click.name }}</span>

  <br />
</template>

<script>
export default {
  props: {
    click: {
      type: Function,
      validator(v) {
        // JSON.stringify(click)
        console.log(v.toString());
        console.log(v);
        console.dir(v);
        // console.log(typeof v);
        return v;
      },
    },
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
