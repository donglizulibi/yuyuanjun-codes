<template>
  <div>
    <h5>升序降序排列</h5>
    <v-for-demo></v-for-demo>

    <h5>v-if和v-else-if的使用（根据课程信息控制背景颜色）</h5>
    <v-if-component></v-if-component>
  </div>
</template>

<script>
import VForDemo from "./fForIf/VForDemo.vue";
import VIfComponent from "./fForIf/VIfComponent.vue";
export default {
  components: {
    VForDemo,
    VIfComponent,
  },
};
</script>

<style lang="scss" scoped></style>
