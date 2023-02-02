<template>
  <div>
    <a href="https://www.baidu.com" v-on:[move]="preventFun" v-bind:style="[color]"
      >阻止跳转（事件对象方法）</a
    >
    <button v-on:click="add">{{ name }}</button>
    <br />
    <a href="https://www.baidu.com" v-on:click.prevent="">阻止跳转（修饰符方法）</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "添加阻止方法",
      move: "",
      color: "",
    };
  },
  methods: {
    preventFun(event) {
      event.preventDefault();
    },
    add() {
      if (this.name == "添加阻止方法") {
        this.name = "取消阻止方法";
        this.move = "click";
        this.color = { color: "black" };
      } else {
        this.name = "添加阻止方法";
        this.move = "";
        this.color = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
