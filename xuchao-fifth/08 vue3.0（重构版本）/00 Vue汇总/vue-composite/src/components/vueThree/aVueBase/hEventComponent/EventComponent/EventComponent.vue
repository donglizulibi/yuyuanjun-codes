<template>
  <span>执行numFunc函数，使得计数累加</span>
  <div @click="sum(123, 444, 18), ev(1, 2, 3, 4, 5, $event), numFunc()">{{ num }}</div>
  <!-- <div @click="numFunc">{{ num }}</div> -->
  <br />
  <span>计算123, 444, 18的和{{ sumRes }}</span>
  <span v-if="eventArr">{{ eventArr.target.nodeName }}</span>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      sumRes: "",
      eventArr: "",
    };
  },
  methods: {
    sum(...args) {
      console.log("执行了sum函数");
      this.sumRes = args.reduce((pre, val) => {
        return pre + val;
      }, 0);
      // console.log("sun res", res);
    },
    numFunc() {
      console.log("执行了numFunc函数");
      this.num++;
    },
    ev(...args) {
      console.log("执行了ev函数");
      console.log(args);
      this.eventArr = args.pop();
      console.dir(this.eventArr.target.nodeName);
      // console.log(event);
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
