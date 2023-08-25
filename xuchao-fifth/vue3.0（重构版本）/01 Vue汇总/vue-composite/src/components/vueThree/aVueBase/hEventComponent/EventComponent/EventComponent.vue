<template>
  <div @click="sum(123, 444, 18), ev(1, 2, 3, 4, 5, $event), numFunc()">{{ num }}</div>
  <h6>1 按钮内的计数累加</h6>
  <h6>2 计算出123, 444, 18的和</h6>
  <span>{{ sumRes }}</span>
  <h6>3 显示所点击按钮的元素名称</h6>
  <span v-if="eventArr">{{ eventArr.target.nodeName }}</span>
  <br />
  <br />
  <br />
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
