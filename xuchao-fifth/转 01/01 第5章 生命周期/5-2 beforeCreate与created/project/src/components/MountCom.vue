<template>
  <div ref="el">父组件</div>
  <mount-child />
</template>

<script>
import mountChild from "./Child/mountChild.vue";
export default {
  components: {
    mountChild,
  },
  data() {
    return {
      hd: "houdunren",
    };
  },
  beforeCreate() {
    console.log("父组件beforeCreate-数据：", this.hd);
    console.log("父组件beforeCreate-页面：", this.$refs.el);
  },
  created() {
    console.log("父组件created-数据：", this.hd);
    console.log("父组件created-页面：", this.$refs.el);
  },
  beforeMount() {
    console.log("父组件beforeMount-数据：", this.hd);
    console.log("父组件beforeMount-页面：", this.$refs.el);
  },
  mounted() {
    console.log("父组件mounted-数据：", this.hd);
    console.log("父组件mounted-页面：", this.$refs.el);
  },
};
</script>

<style lang="scss" scoped></style>
