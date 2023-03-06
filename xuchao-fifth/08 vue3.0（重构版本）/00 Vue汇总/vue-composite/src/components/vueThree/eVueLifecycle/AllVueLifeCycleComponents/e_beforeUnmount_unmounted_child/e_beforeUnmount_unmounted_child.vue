<template>
  <div>子组件的区域</div>
</template>

<script>
export default {
  data() {
    return {
      timeId: null,
      count: 0,
      unmountedData: "houdunren",
    };
  },
  created() {
    this.timeId = setInterval(() => {
      console.log("子组件的定时器", this.count++);
    }, 500);
  },
  beforeUnmount() {
    console.log("子组件的beforeUnmount：", this.unmountedData);
  },
  unmounted() {
    console.log("子组件的unmounted: ", this.unmountedData);
    clearInterval(this.timeId);
  },
};
</script>

<style lang="scss" scoped>
div {
  padding: 10px;
  border: 1px solid blue;
}
</style>
