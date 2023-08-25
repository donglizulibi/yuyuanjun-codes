<template>
  <div>
    <input type="text" :value="content" @input="change" />
    <div>子组件区域：{{ content }}</div>
  </div>
</template>

<script>
export default {
  // props: ["modelValue"],
  props: {
    modelValue: {
      validator(v) {
        // console.log(123, v);
        return 1;
      },
    },
  },
  emits: ["update:modelValue"],

  data() {
    return {
      content: this.modelValue,
    };
  },
  watch: {
    modelValue(v) {
      this.content = v;
    },
  },
  methods: {
    change(event) {
      console.log(event.target.value);
      this.content = event.target.value;
      this.$emit("update:modelValue", this.content);
    },
  },
};
</script>

<style lang="scss" scoped></style>
