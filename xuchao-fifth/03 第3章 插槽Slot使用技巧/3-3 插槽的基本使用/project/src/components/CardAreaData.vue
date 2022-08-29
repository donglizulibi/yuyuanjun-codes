<template>
  <div>
    <div>CardAreaData的基本内容</div>
    <div><slot /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "子组件的content数据",
    };
  },
};
</script>

<style lang="scss" scoped></style>
