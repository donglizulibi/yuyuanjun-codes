<template>
  <div>
    <h5>父组件props传递的数据是引用类型的情况</h5>
    <h5>子组件的操作可以改变父组件的数据，但是并不符合规范</h5>
    <h5>子组件如果要修改父组件数据还是应该通过$emit事件触发</h5>
    <button-single-obj :contentObj="contentObj"></button-single-obj>
    <button v-on:click="changeObjContent">修改父组件数据</button>
    <div>父组件的数据：{{ contentObj }}</div>

    <h5>父组件props传递的数据是值类型的情况</h5>
    <h5>数据改变的方向只有父组件到子组件</h5>
    <button-single-str :contentStr="contentStr"></button-single-str>
    <button v-on:click="changeStrContent">修改父组件数据</button>
    <div>父组件的数据：{{ contentStr }}</div>
  </div>
</template>

<script>
import ButtonSingleObj from "./eSingDataButtonComponents/ButtonSingleObj.vue";
import ButtonSingleStr from "./eSingDataButtonComponents/ButtonSingleStr.vue";

export default {
  data() {
    return {
      contentObj: { text: "asdf" },
      contentStr: "asdf",
    };
  },
  methods: {
    changeObjContent() {
      // this.contentObj.text = this.contentObj.text == "hdcms" ? "hdcms" : "asdf";

      if (this.contentObj.text == "hdcms") {
        this.contentObj.text = "asdf";
      } else {
        this.contentObj.text = "hdcms";
      }
    },
    changeStrContent() {
      if (this.contentStr == "hdcms") {
        this.contentStr = "asdf";
      } else {
        this.contentStr = "hdcms";
      }
    },
  },
  components: {
    ButtonSingleStr,
    ButtonSingleObj,
  },
};
</script>

<style lang="scss" scoped></style>
