<template>
  <div>
    {{ lessonData.title }}
    <span @click="$emit('hd', lessonData.id)">删除</span>
  </div>
</template>

<script>
export default {
  props: ["lesson"],
  emits: ["hd"],
  created() {
    // console.log(this.lesson);
  },
  data() {
    return {
      lessonData: this.lesson,
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  border: 1px black solid;
  padding: 10px;
  margin-top: 10px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  span {
    display: inline-block;
    border: 1px black solid;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
    font-size: small;
  }
}
</style>
