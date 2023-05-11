<template>
  <div>
    <h5>点击事件绑定多个方法</h5>
    <event-component></event-component>

    <h5>冒泡修饰符</h5>
    <event-fix-component></event-fix-component>

    <h5>键盘事件</h5>
    <event-key></event-key>

    <h5>passive修饰符和滚动事件</h5>
    <event-passive></event-passive>
  </div>
</template>

<script>
import EventComponent from "./EventComponent/EventComponent.vue";
import EventFixComponent from "./EventComponent/EventFixComponent.vue";
import EventPassive from "./EventComponent/EventPassive.vue";
import EventKey from "./EventComponent/EventKey.vue";
export default {
  components: {
    EventComponent,
    EventFixComponent,
    EventKey,
    EventPassive,
  },
};
</script>

<style lang="scss" scoped></style>
