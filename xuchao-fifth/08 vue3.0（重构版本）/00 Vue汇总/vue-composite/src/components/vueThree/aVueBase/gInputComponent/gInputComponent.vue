<template>
  <div>
    <h4>表单元素的基本使用</h4>
    <input-component></input-component>

    <h4>表单修饰符的使用</h4>
    <input-fix-component></input-fix-component>

    <h4>列表框和单选框</h4>
    <input-select-component></input-select-component>

    <h4>省市区组件（v-on:change绑定表单）</h4>
    <prov-city-zone-component></prov-city-zone-component>
  </div>
</template>

<script>
import InputComponent from "./InputComponent/InputComponent.vue";
import InputFixComponent from "./InputComponent/InputFixComponent.vue";
import InputSelectComponent from "./InputComponent/InputSelectComponent.vue";
import ProvCityZoneComponent from "./InputComponent/ProvCityZoneComponent.vue";
export default {
  components: {
    InputComponent,
    InputFixComponent,
    InputSelectComponent,
    ProvCityZoneComponent,
  },
};
</script>

<style lang="scss" scoped></style>
