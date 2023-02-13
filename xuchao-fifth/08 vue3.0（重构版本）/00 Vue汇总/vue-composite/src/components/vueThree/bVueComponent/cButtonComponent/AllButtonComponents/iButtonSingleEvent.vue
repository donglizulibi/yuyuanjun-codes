<template>
  <div>
    <h5>非props方式传递事件</h5>
    <button-single-event-non-props
      buttonType="success"
      contentStr="按钮"
      v-on:click="nonPropsCli"
    ></button-single-event-non-props>
    <div v-if="nonPropsText">这里是父组件的区域： {{ nonPropsText }}</div>

    <h5>props方式传递事件</h5>
    <button-single-event-props
      buttonType="success"
      contentStr="按钮"
      v-bind:click="propsCli"
    ></button-single-event-props>
    <!-- v-on:click="propsCli" -->
    <button v-on:click="propsCli">测试</button>
    <div v-if="propsText">这里是父组件的区域： {{ propsText }}</div>
  </div>
</template>

<script>
import ButtonSingleEventNonProps from "./iButtonSingleEvent/ButtonSingleEventNonProps.vue";
import ButtonSingleEventProps from "./iButtonSingleEvent/ButtonSingleEventProps.vue";
export default {
  components: {
    ButtonSingleEventNonProps,
    ButtonSingleEventProps,
  },
  data() {
    return {
      nonPropsText: "",
      propsText: "",
    };
  },
  watch: {},
  methods: {
    propsCli() {
      // if (this.propsText) {
      //   this.propsText = "";
      // } else {
      //   this.propsText = "asdf";
      // }
      console.log(123);
    },
    nonPropsCli() {
      if (this.nonPropsText) {
        this.nonPropsText = "";
      } else {
        this.nonPropsText = "asdf";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
