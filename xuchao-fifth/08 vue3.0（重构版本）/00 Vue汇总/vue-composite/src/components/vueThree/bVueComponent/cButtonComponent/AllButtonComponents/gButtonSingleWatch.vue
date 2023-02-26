<template>
  <div>
    <h5>子组件将数据转存在data之后，点击修改父组件数据，不会修改子组件数据</h5>
    <h5>所以除了转存data之外还需要由其他操作</h5>
    <button-single-norm
      buttonType="success"
      :contentStr="contentStr"
    ></button-single-norm>
    <div>父组件数据：{{ contentStr }}</div>
    <button v-on:click="changeNorm">改变父组件需要通过props传递过去的数据</button>
    <br />
    <hr />

    <h5>子组件中使用watch监听props数据</h5>
    <h6>传递的数据是字符串可以达到效果</h6>
    <button-single-watch-str
      buttonType="success"
      :contentStr="contentWatchStr"
    ></button-single-watch-str>
    <br />
    <div>父组件数据：{{ contentWatchStr }}</div>
    <button v-on:click="changeWatchStr">改变父组件需要通过props传递过去的数据</button>

    <br />
    <br />
    <hr />
    <h6>如果传递的数据的引用类型，子组件的数据改变还是会影响到父组件</h6>
    <button-single-watch-obj
      buttonType="success"
      :contentStr="contentWatchObj"
    ></button-single-watch-obj>
    <br />
    <div>父组件数据：{{ contentWatchObj }}</div>
    <button v-on:click="changeWatchObj">改变父组件需要通过props传递过去的数据</button>
    <h5>注：所以规范的props写法包括在data里中转数据和在watch里监听数据更新</h5>
    <br />
  </div>
</template>

<script>
import ButtonSingleWatchObj from "./gButtonSingleWatchComponents/ButtonSingleWatchObj.vue";
import ButtonSingleNorm from "./gButtonSingleWatchComponents/ButtonSingleNorm.vue";
import ButtonSingleWatchStr from "./gButtonSingleWatchComponents/ButtonSingleWatchStr.vue";
export default {
  components: {
    ButtonSingleWatchObj,
    ButtonSingleNorm,
    ButtonSingleWatchStr,
  },
  methods: {
    changeWatchStr() {
      if (this.contentWatchStr == "zxcv") {
        this.contentWatchStr = "asdf";
      } else {
        this.contentWatchStr = "zxcv";
      }
    },
    changeWatchObj() {
      if (this.contentWatchObj.name == "zxcv") {
        this.contentWatchObj.name = "asdf";
      } else {
        this.contentWatchObj.name = "zxcv";
      }
    },
    changeNorm() {
      if (this.contentStr == "zxcv") {
        this.contentStr = "asdf";
      } else {
        this.contentStr = "zxcv";
      }
    },
  },
  data() {
    return {
      contentStr: "asdf",
      contentWatchObj: { name: "asdf" },
      contentWatchStr: "asdf",
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  border: 1px black solid;
}
</style>
