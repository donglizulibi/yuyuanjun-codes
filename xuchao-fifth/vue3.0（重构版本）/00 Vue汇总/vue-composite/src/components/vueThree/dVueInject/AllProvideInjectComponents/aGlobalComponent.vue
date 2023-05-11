<template>
  <div class="main">
    <h4></h4>
    <card>
      <template v-slot:default> 卡片组件的默认部分 </template>
      <template v-slot:header> 卡片组件的头部 </template>
    </card>
    <x-input v-model="inputData" title="全局组件input"></x-input>
    <span>{{ inputData }}</span>
    <x-textarea :rows="10" v-model="textareatData" title="全局组件textarea"></x-textarea>
    <span>{{ textareatData }}</span>
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputData: "",
      textareatData: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 300px;
  margin: auto;
}
</style>
