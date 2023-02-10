<template>
  <div class="main">
    <div style="width: 300px; border: 2px solid grey">{{ content }}</div>
    <div style="margin-bottom: 10px">{{ mid }}</div>
  </div>
</template>

<script>
export default {
  props: ["mid"],
  data() {
    return {
      content: "我是来凑数的子组件",
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin: auto;
  width: 400px;
  div {
    margin: auto;
  }
}
</style>
