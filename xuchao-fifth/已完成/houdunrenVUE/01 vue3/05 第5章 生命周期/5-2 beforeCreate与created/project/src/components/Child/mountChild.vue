<template>
  <div ref="elChild">mountChild子组件</div>
</template>

<script>
export default {
  data() {
    return {
      hd: "houdunrenChild",
    };
  },
  beforeCreate() {
    console.log("子组件beforeCreate-数据：", this.hd);
    console.log("子组件beforeCreate-页面：", this.$refs.elChild);
  },
  created() {
    console.log("子组件created-数据：", this.hd);
    console.log("子组件created-页面：", this.$refs.elChild);
  },
  beforeMount() {
    console.log("子组件beforeMount-数据：", this.hd);
    console.log("子组件beforeMount-页面：", this.$refs.elChild);
  },
  mounted() {
    console.log("子组件mounted-数据：", this.hd);
    console.log("子组件mounted-页面：", this.$refs.elChild);
  },
};
</script>

<style lang="scss" scoped></style>
