<template>
  <h4>基本特性</h4>
  <h5>beforeMount可以读取数据，但无法获取模板的元素</h5>
  <h5>mounted二者都可以获取</h5>
  <div ref="el"></div>
  <br />
  <h4>挂载子组件时，两层组件的生命周期顺序</h4>
  <c-before-mount-mounted-child></c-before-mount-mounted-child>
  <h5>顺序的特点是首先是父组件的生命周期，再进入到子组件，最后又回到父组件</h5>
  <h5>1 首先是父组件：父组件beforeCreate --> 父组件created --> 父组件beforeMount</h5>
  <h5>
    2 然后进入子组件：子组件beforeCreate --> 子组件created --> 子组件beforeMount -->
    子组件mounted
  </h5>
  <h5>3 最后回到父组件：父组件mounted</h5>
  <h5>也就是说，子组件先mounted，父组件再mounted</h5>
  <br />
  <br />
</template>

<script>
import cBeforeMountMountedChild from "./c_beforeMount_mounted_child/c_beforeMount_mounted_child.vue";
export default {
  components: {
    cBeforeMountMountedChild,
  },
  data() {
    return {
      mountedData: "houdunren",
    };
  },
  created() {
    console.log("父组件created：", this.mountedData);
    console.log("父组件created：", this.$refs.el);
  },
  beforeCreate() {
    console.log("父组件beforeCreate：", this.mountedData);
    console.log("父组件beforeCreate：", this.$refs.el);
  },
  mounted() {
    console.log("父组件mounted：", this.mountedData);
    console.log("父组件mounted：", this.$refs.el);
  },
  beforeMount() {
    console.log("父组件beforeMount：", this.mountedData);
    console.log("父组件beforeMount：", this.$refs.el);
  },
};
</script>

<style lang="scss" scoped></style>
