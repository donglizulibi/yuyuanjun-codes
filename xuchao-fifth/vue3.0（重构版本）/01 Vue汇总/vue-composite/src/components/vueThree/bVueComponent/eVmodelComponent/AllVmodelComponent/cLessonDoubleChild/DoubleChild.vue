<template>
  <div>
    <img :src="lessonData.preview" :alt="lessonData.title" />
    <h3 @dblclick="inputStatus = true">
      <input
        v-if="inputStatus"
        @keyup.enter="inputStatus = false"
        @blur="inputStatus = false"
        type="text"
        :value="lessonData.title"
        @input="lessonData.title = $event.target.value"
      />
      <strong v-else>{{ lessonData.title }}</strong>
    </h3>
    <span @click="delClick(lessonData.id)">×</span>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: null,
    lesson: {
      type: Object,
      //   validator(v) {
      // console.log(v);
      // return 1;
      //   },
    },
  },
  emits: {
    "update:modelValue": (v) => {
      console.log("update:modelValue: ", v);
      return 1;
    },
    hd() {
      return 1;
    },
  },
  data() {
    return {
      lessonData: this.lesson,
      inputStatus: false,
    };
  },
  methods: {
    delClick(id) {
      console.log(id);
      let state = confirm("确定删除吗？");
      console.log(state);
      if (state) {
        this.$emit("hd", id);
        // this.$emit("hd", "asdf");
      }
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
  > article {
    display: block;
    position: absolute;
    top: 0;
  }
}
</style>
