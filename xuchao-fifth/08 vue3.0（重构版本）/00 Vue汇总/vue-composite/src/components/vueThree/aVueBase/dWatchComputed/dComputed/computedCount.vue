<template>
  <div>
    <button v-on:click="add">增加</button>
    <button v-on:click="desc">减少</button>
    <div>{{ num }}</div>
    <span style="background: red">{{ error }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      tip: "",
      stateZero: false,
      stateTen: false,
    };
  },
  computed: {
    error: {
      set(tip) {
        this.tip = tip;
      },
      get() {
        let message = undefined;

        if (this.stateZero) {
          //   console.log(this.stateZero);
          message = "不能小于零";
        } else if (this.stateTen) {
          message = "不能大于10";
        } else {
          message = "";
        }

        if (message) {
          return this.tip + message;
        }
      },
    },
  },
  methods: {
    add() {
      this.error = "警告：";
      if (this.num < 10) {
        this.num++;
        this.stateTen = false;
        this.stateZero = false;
      } else {
        this.stateTen = true;
      }
    },
    desc() {
      this.error = "提示：";
      if (this.num > 0) {
        this.num--;
        this.stateZero = false;
        this.stateTen = false;
      } else {
        this.stateZero = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
