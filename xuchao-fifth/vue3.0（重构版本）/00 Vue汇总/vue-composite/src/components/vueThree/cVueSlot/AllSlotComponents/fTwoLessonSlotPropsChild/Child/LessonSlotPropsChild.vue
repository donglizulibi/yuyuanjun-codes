<template>
  <div>
    <strong>
      <slot name="icon"></slot>
    </strong>
    {{ lessonData }}
    <br />
    {{ lessonData.title }}
    <slot content="houdunren" status="hd" :id="lessonData.id" />
    <!-- <slot content="houdunren" status="hd" :id="lessonData.id" name="abc" /> -->
    <!-- 添加name属性使之成为具名插槽 -->
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
