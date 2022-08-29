<template>
  <div @click="sum(123, 444, 18), ev(1, 2, 3, 4, 5, $event), numFunc()">{{ num }}</div>
  <!-- <div @click="numFunc">{{ num }}</div> -->
</template>

<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    sum(...args) {
      console.log("执行了sum函数");
      const res = args.reduce((pre, val) => {
        return pre + val;
      }, 0);
      console.log("sun res", res);
    },
    numFunc() {
      console.log("执行了numFunc函数");
      this.num++;
    },
    ev(...args) {
      console.log("执行了ev函数");
      console.log(args);
      let event = args.pop();
      console.log(event);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: inline-block;
  width: 50px;
  border: 4px solid gray;
  border-radius: 5px;
  cursor: pointer;
}
</style>
