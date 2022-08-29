<script>
import ClassComponent from "./components/ClassComponent.vue";
import ClassControl from "./components/ClassControl.vue";
import ClassList from "./components/ClassList.vue";
import ClassStyle from "./components/ClassStyle.vue";
import VIfComponentVue from "./components/VIfComponent.vue";
import VForComponentVue from "./components/VForComponent.vue";
import VForDemoVue from "./components/VForDemo.vue";
import EventComponentVue from "./components/EventComponent.vue";
import EventFixComponentVue from "./components/EventFixComponent.vue";
import EventPassiveVue from "./components/EventPassive.vue";
import EventKeyVue from "./components/EventKey.vue";
import InputComponentVue from "./components/InputComponent.vue";
import InputSelectComponentVue from "./components/InputSelectComponent.vue";
import ProvCityZoneComponentVue from "./components/ProvCityZoneComponent.vue";
import InputFixComponentVue from "./components/InputFixComponent.vue";
// 如果要使用export default，先删去script的setup
export default {
  // 组件的注册
  components: {
    ClassComponent,
    ClassControl,
    ClassList,
    ClassStyle,
    VIfComponentVue,
    VForComponentVue,
    VForDemoVue,
    EventComponentVue,
    EventFixComponentVue,
    EventPassiveVue,
    EventKeyVue,
    InputComponentVue,
    InputSelectComponentVue,
    ProvCityZoneComponentVue,
    InputFixComponentVue,
  },
  data() {
    return {
      name: "hoduunren",
      hd: "hdcms",
    };
  },
};
</script>

<template>
  <div>
    {{ name }}-{{ hd }}
    <!-- <ClassComponent /> -->
    <!-- 这两种都可以 -->
    <class-component></class-component>
    <class-control></class-control>
    <class-list></class-list>
    <class-style class="cs"></class-style>
    <v-if-component-vue></v-if-component-vue>
    <div>=========间隔=========</div>
    <v-for-component-vue v-for="n in 3" :key="n"></v-for-component-vue>
    <div>=========间隔=========</div>
    <v-for-demo-vue></v-for-demo-vue>
    <div>=========间隔=========</div>
    <event-component-vue></event-component-vue>
    <div>=========间隔=========</div>
    <event-fix-component-vue></event-fix-component-vue>
    <div>=========间隔=========</div>
    <event-passive-vue></event-passive-vue>
    <div>=========间隔=========</div>
    <event-key-vue></event-key-vue>
    <div>=========间隔=========</div>
    <input-component-vue></input-component-vue>
    <div>=========间隔=========</div>
    <input-select-component-vue></input-select-component-vue>
    <div>=========间隔=========</div>
    <prov-city-zone-component-vue></prov-city-zone-component-vue>
    <div>=========间隔=========</div>
    <input-fix-component-vue></input-fix-component-vue>
  </div>
</template>

<style>
/* <style scoped> */
.cs {
  background-color: blue;
  font-size: 40px;
  font-weight: bold;
}
</style>
