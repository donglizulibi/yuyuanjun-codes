<template>
  <div ref="el">子组件的区域</div>
</template>

<script>
export default {
  data() {
    return {
      mountedData: "houdunren",
    };
  },
  created() {
    console.log("子组件created：", this.mountedData);
    console.log("子组件created：", this.$refs.el);
  },
  beforeCreate() {
    console.log("子组件beforeCreate：", this.mountedData);
    console.log("子组件beforeCreate：", this.$refs.el);
  },
  mounted() {
    console.log("子组件mounted：", this.mountedData);
    console.log("子组件mounted：", this.$refs.el);
  },
  beforeMount() {
    console.log("子组件beforeMount：", this.mountedData);
    console.log("子组件beforeMount：", this.$refs.el);
  },
};
</script>

<style lang="scss" scoped>
div {
  padding: 10px;
  border: 1px solid blue;
}
</style>
