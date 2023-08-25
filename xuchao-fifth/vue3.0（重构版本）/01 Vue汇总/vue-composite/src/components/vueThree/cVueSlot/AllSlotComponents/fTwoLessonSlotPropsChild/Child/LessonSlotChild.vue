<template>
  <div>
    {{ lessonData.title }}
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["lesson"],
  data() {
    return {
      lessonData: this.lesson,
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-between;
  border: 1px black solid;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
}
</style>
