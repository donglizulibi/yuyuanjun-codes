<template>
  <div>子组件的区域</div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("子组件beforeCreate");
  },
  created() {
    console.log("子组件created");
  },
  beforeMount() {
    console.log("子组件beforeMount");
  },
  mounted() {
    console.log("子组件mounted");
  },
};
</script>

<style lang="scss" scoped>
div {
  padding: 10px;
  border: 1px solid blue;
}
</style>
