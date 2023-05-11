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
      error: "",
    };
  },
  methods: {
    add() {
      this.error = "";
      if (this.num >= 10) {
        this.error = "计数不能大于10";
      } else {
        this.num++;
      }
    },
    desc() {
      this.error = "";
      if (this.num <= 0) {
        this.error = "计数不能小于0";
      } else {
        this.num--;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
