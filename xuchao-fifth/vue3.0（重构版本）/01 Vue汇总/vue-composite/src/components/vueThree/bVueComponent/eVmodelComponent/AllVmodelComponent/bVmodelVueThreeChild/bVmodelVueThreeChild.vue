<template>
  <div>
    <vmodel-vue-three-child
      v-bind:modelValue="title"
      v-on:update:modelValue="content"
    ></vmodel-vue-three-child>
    <div>父组件的区域：{{ title }}</div>
    <button @click="change">改变父组件数据</button>
  </div>
</template>

<script>
import VmodelVueThreeChild from "./VmodelVueThreeChild.vue";
export default {
  components: {
    VmodelVueThreeChild,
  },

  data() {
    return {
      title: "houdunren",
    };
  },
  methods: {
    change() {
      if (this.title == "sadf") {
        this.title = "houdunren";
      } else {
        this.title = "sadf";
      }
    },
    content(event) {
      console.log(event);
      this.title = event;
    },
  },
};
</script>

<style lang="scss" scoped></style>
