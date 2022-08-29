<template>
  <div>
    <input type="text" :value="content" @input="change" />
    <span>{{ content }}</span>
  </div>
</template>

<script>
export default {
  // props: ["modelValue"],
  props: {
    modelValue: {
      validator(v) {
        console.log(v);
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
