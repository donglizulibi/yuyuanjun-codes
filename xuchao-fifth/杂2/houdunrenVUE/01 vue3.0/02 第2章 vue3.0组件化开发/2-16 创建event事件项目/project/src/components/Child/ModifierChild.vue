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
        @input="showTitle"
      />
      <strong v-else>{{ lessonData.title }}</strong>
    </h3>

    <h3 @dblclick="inputPriceStatus = true">
      <input
        v-if="inputPriceStatus"
        @keyup.enter="inputPriceStatus = false"
        @blur="inputPriceStatus = false"
        type="text"
        :value="lessonData.price"
        @input="showPrice"
      />
      <strong v-else>{{ lessonData.price }}</strong>
    </h3>
    <span @click="delClick(lessonData.id)">×</span>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.titleModifiers);
    console.log("created", this.price);
  },
  props: {
    title: null,
    price: {
      validator(v) {
        console.log("price", v);
        return 1;
      },
    },
    lesson: {
      type: Object,
      //   validator(v) {
      // console.log(v);
      // return 1;
      //   },
    },
    titleModifiers: null,
  },
  emits: {
    "update:title": (v) => {
      console.log("update:title: ", v);
      return 1;
    },
    "update:price": (v) => {
      console.log("update:price: ", v);
      return 1;
    },
    hd(v) {
      console.log(v);
      if (/^\d+$/.test(v)) {
        return 1;
      } else {
        throw new Error("hd emit 需要数值参数");
      }
    },
  },
  data() {
    return {
      lessonData: this.lesson,
      inputStatus: false,
      inputPriceStatus: false,
    };
  },
  methods: {
    showTitle(event) {
      //   this.lessonData.title = event.target.value;
      //   this.$emit("update:modelValue", this.lessonData.title);
      console.log(event.target.value);
      let value = event.target.value;
      console.log("1", value);
      if (this.titleModifiers.uppercase) {
        value = value.toUpperCase();
      }
      console.log("2", value);

      console.log(Object.keys(this.titleModifiers));
      let substr = Object.keys(this.titleModifiers).find((item) => /^substr/.test(item));
      console.log(substr);
      let num = substr.split("_")[1] * 1;
      console.log(num);
      console.log(typeof num);

      console.log("3", value);

      // 注意这里要用substr，不能用this.titleModifiers.substr
      // 因为this.titleModifiers里面不确定是不是substr
      if (substr) {
        value = value.substr(0, num);
      }
      console.log("4", value);
      this.$emit("update:title", value);
    },
    showPrice(event) {
      //   this.lessonData.price = event.target.value;
      this.$emit("update:price", event.target.value);
    },
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
}
</style>
