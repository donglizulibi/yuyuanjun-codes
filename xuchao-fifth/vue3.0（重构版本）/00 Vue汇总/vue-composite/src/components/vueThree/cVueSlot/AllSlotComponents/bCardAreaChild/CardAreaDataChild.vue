<template>
  <div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: "子组件CardAreaDataChild的content数据",
    };
  },
};
</script>

<style lang="scss" scoped></style>
