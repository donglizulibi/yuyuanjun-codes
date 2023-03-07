<template>
  <div>
    <h5>子组件区域：</h5>
    <input type="text" v-on:input="send" :value="propsData" />
    <!-- <button v-on:click="send">子组件按钮</button> -->
  </div>
</template>

<script>
export default {
  emits: ["change"],
  props: ["valueData"],
  data() {
    return {
      propsData: this.valueData,
    };
  },
  watch: {
    valueData(v) {
      this.propsData = v;
    },
  },
  methods: {
    send(event) {
      console.log(event);
      this.$emit("change", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
