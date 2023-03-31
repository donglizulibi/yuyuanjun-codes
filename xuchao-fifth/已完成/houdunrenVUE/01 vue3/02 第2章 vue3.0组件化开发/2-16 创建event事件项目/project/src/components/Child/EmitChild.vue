<template>
  <div>
    <img :src="lessonData.preview" :alt="lessonData.title" />
    <h3>{{ lessonData.title }}</h3>
    <span @click="delClick">×</span>
  </div>
</template>

<script>
export default {
  emits: ["hd"],
  props: {
    lesson: {
      type: Object,
      validator(v) {
        console.log(v);
        return 1;
      },
    },
  },
  data() {
    return {
      lessonData: this.lesson,
      childData: "子组件的数据",
    };
  },
  methods: {
    delClick() {
      this.$emit("hd", this.childData);
    },
  },
  watch: {
    lesson(v) {
      this.lessonData = v;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  border: solid 1px #ddd;
  text-align: center;
  transition: 1s;
  position: relative;
  &:hover {
    box-shadow: 0 0 20px #aaa;
    > span {
      opacity: 1;
    }
  }
  span {
    display: block;
    width: 20px;
    height: 20px;
    background-color: #666;
    color: #fff;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    line-height: 18px;
    text-align: center;
    border-radius: 50%;
    opacity: 0;
    transition: 1s;
  }
  h3 {
    margin: 0;
    padding: 0 0 20px 0;
    font-size: 16px;
  }
  img {
    width: 100%;
  }
}
</style>
