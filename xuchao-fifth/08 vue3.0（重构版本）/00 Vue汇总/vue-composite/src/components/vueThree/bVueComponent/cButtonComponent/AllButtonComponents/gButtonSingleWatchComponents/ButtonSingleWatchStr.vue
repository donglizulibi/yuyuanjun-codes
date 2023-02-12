<template>
  <div :class="buttonType">{{ text }}</div>
  <br />
  <span>中间变量text：{{ text }}</span
  ><br />
  <span>这里是不规范的直接把props数据放在页面的方法： {{ contentStr }}</span>
  <br />
  <button v-on:click="change">改变子组件数据</button>
</template>

<script>
export default {
  props: {
    contentStr: {
      // type: String,
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
  methods: {
    change() {
      this.text = "gfjh";
    },
  },
  watch: {
    contentStr(v, w) {
      console.log(v);
      console.log(w);
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

button {
  border: 1px solid black;
}
</style>
