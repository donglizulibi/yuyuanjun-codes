<template>
  <div>d2使用stopPropagation方法</div>
  <div>d3使用stop修饰符</div>
  <div>d4不作处理</div>
  <div @click="d1" class="d1">
    <span>d1</span>
    <div @click="d2" class="d2">d2</div>
    <div @click.stop="d3" class="d3">d3</div>
    <div @click="d4" class="d4">d4</div>
  </div>
  <br />
  <button v-on:click="clear">初始化</button>
  <div>{{ dData }}</div>
  <br />
  <br />
</template>

<script>
export default {
  data() {
    return {
      d1Data: "",
      d2Data: "",
      d3Data: "",
      d4Data: "",
    };
  },
  computed: {
    dData() {
      let arr1 = [this.d1Data, this.d2Data, this.d3Data, this.d4Data];

      let arr2 = arr1.reduce((pre, val) => {
        if (val) {
          pre.push(val);
        }
        return pre;
      }, []);

      // if (arr2.length == 1) {
      //   return arr2[0];
      // } else {
      //   return arr2.join("-");
      // }

      return arr2.length == 1 ? arr2[0] : arr2.join("-");
    },
  },
  methods: {
    d1(event) {
      this.d1Data = "d1触发";
      console.log(event.target);
      console.log("d1");
    },
    d2(event) {
      event.stopPropagation();
      console.log("d2");
      this.d2Data = "d2触发";
    },
    d3() {
      console.log("d3");
      this.d3Data = "d3触发";
    },
    d4(event) {
      console.log("d4");
      this.d4Data = "d4触发";
    },
    clear() {
      this.d1Data = "";
      this.d2Data = "";
      this.d3Data = "";
      this.d4Data = "";
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid black;
}
.d1 {
  color: azure;
  font-weight: bold;
  margin: auto;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 80px;
  border: 1px grey solid;
  border-radius: 5px;
  cursor: pointer;
  line-height: 50px;
  background-color: green;
  position: relative;
}
span {
  display: inline-block;
  position: absolute;
  top: -15px;
  left: 2px;
  // line-height: 15px;
}
.d2,
.d3,
.d4 {
  margin: 10px;
  width: 40px;
  height: 40px;
  background-color: red;
  line-height: 40px;
}
</style>
