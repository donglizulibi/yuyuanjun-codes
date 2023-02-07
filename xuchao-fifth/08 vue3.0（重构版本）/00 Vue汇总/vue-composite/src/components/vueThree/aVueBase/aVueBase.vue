<template>
  <div>
    <h3 v-on:click="directShow">1）vue的基础指令</h3>
    <a-v-direct v-if="directState"></a-v-direct>

    <h3 v-on:click="countDemoShow">2）增加减少计数例子（methods用法）</h3>
    <b-count-demo v-if="countDemoState"></b-count-demo>

    <h3 v-on:click="preventDefaultShow">3）阻止跳转</h3>
    <c-prevent-default v-if="preventDefaultState"></c-prevent-default>

    <h3 v-on:click="watchComputedShow">4）增加减少计数例子（watch和computed）</h3>
    <d-watch-count v-if="watchComputedState"></d-watch-count>
    <d-computed-count v-if="watchComputedState"></d-computed-count>

    <h3 v-on:click="classStyleShow">5）vue的样式控制</h3>
    <e-class-style v-if="classStyleState"></e-class-style>

    <h3 v-on:click="fForIfShow">6）v-if和v-for相关</h3>
    <f-for-if v-if="fForIfState"></f-for-if>

    <h3 v-on:click="gInputComponentShow">7） input表单相关</h3>
    <g-input-component v-if="gInputComponentState"></g-input-component>

    <h3 v-on:click="hEventComponentShow">8）event事件相关</h3>
    <h-event-component v-if="hEventComponentState"></h-event-component>
  </div>
</template>

<script>
import aVDirect from "./aVDirect/aVDirect.vue";
import bCountDemo from "./bCountDemo/bCountDemo.vue";
import cPreventDefault from "./cPreventDefault/cPreventDefault.vue";
import dComputedCount from "./dWatchComputed/dComputedCount.vue";
import dWatchCount from "./dWatchComputed/dWatchCount.vue";
import eClassStyle from "./eClassStyle/eClassStyle.vue";
import fForIf from "./fForIf/fForIf.vue";
import gInputComponent from "./gInputComponent/gInputComponent.vue";
import hEventComponent from "./hEventComponent/hEventComponent.vue";
export default {
  components: {
    aVDirect,
    bCountDemo,
    cPreventDefault,
    dComputedCount,
    dWatchCount,
    eClassStyle,
    fForIf,
    gInputComponent,
    hEventComponent,
  },
  data() {
    return {
      directState: true,
      countDemoState: true,
      preventDefaultState: true,
      watchComputedState: true,
      classStyleState: true,
      fForIfState: true,
      gInputComponentState: true,
      hEventComponentState: true,
    };
  },
  methods: {
    directShow() {
      this.directState = !this.directState;
    },
    countDemoShow() {
      this.countDemoState = !this.countDemoState;
    },
    preventDefaultShow() {
      this.preventDefaultState = !this.preventDefaultState;
    },
    watchComputedShow() {
      this.watchComputedState = !this.watchComputedState;
    },

    classStyleShow() {
      this.classStyleState = !this.classStyleState;
    },
    fForIfShow() {
      this.fForIfState = !this.fForIfState;
    },
    gInputComponentShow() {
      this.gInputComponentState = !this.gInputComponentState;
    },
    hEventComponentShow() {
      this.hEventComponentState = !this.hEventComponentState;
    },
  },
};
</script>

<style lang="scss" scoped></style>
