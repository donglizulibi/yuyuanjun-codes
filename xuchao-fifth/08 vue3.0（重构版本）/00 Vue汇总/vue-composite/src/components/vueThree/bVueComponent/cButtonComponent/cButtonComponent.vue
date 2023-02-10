<template>
  <div>
    <h4>基本按钮组件</h4>
    <div>使用对象的方式规定props属性</div>
    <h5>默认样式</h5>
    <a-base-button></a-base-button>
    <h5>自定义样式</h5>
    <a-base-button :content="cont" :arr="array"></a-base-button>

    <h4>自定义组件样式</h4>
    <b-button-style></b-button-style>
    <!-- 自定义类型 -->
    <b-button-style content="删除" buttonType="danger"></b-button-style>
    <b-button-style content="返回" buttonType="success"></b-button-style>
    <b-button-style
      content="提交成功"
      buttonType="success"
      style="border: 5px solid black"
    ></b-button-style>
  </div>
</template>

<script>
import aBaseButton from "./AllButtonComponents/aBaseButton.vue";
import bButtonStyle from "./AllButtonComponents/bButtonStyle.vue";
export default {
  components: {
    aBaseButton,
    bButtonStyle,
  },
  data() {
    return {
      cont: "自定义按钮",
      array: [2, 3, 4],
    };
  },
};
</script>

<style lang="scss" scoped></style>
