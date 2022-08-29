<template>
  <div @click="d1" class="d1">
    <span>d1</span>
    <div @click="d2" class="d2">d2</div>
    <div @click.stop="d3" class="d3">d3</div>
  </div>
</template>

<script>
export default {
  methods: {
    d1() {
      console.log("d1");
    },
    d2(event) {
      event.stopPropagation();
      console.log("d2");
    },
    d3() {
      console.log("d3");
    },
  },
};
</script>

<style lang="scss" scoped>
.d1 {
  font-weight: bold;
  margin: auto;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
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
.d3 {
  margin: 10px;
  width: 40px;
  height: 40px;
  background-color: red;
  line-height: 40px;
}
</style>
