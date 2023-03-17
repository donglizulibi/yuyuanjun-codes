<template>
  <h6>这个例子中子组件试图通过一个方法修改props数据，结果报错</h6>
  <h6>如果把修改props数据的动作直接放在页面中，则可以修改成功</h6>
  <div :class="buttonType">{{ contentStr }}</div>
  <br />
  <button @click="contentStr = 'houdunren'">子组件-直接在页面修改</button>
  <br />
  <button @click="childChange">子组件-通过方法修改</button>

  <p>子组件数据:{{ contentStr }}</p>
  <h6>所以结论就是，在子组件内部无法通过method中的方法修改props数据</h6>
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
    hdTip: {
      type: String,
    },
  },
  methods: {
    childChange() {
      this.contentStr = "houdunren";
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
