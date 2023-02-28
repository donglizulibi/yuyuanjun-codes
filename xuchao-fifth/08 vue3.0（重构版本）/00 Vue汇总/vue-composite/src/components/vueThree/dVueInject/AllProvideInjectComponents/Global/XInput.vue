<template>
  <label>
    <div>{{ titleData }}:&nbsp;</div>
    <input type="text" v-model="modelValueData" />
  </label>
</template>

<script>
export default {
  props: ["title", "modelValue"],
  emits: ["update:modelValue"],
  data() {
    return {
      titleData: this.title,
      modelValueData: this.modelValue,
    };
  },
  watch: {
    modelValueData(v) {
      this.$emit("update:modelValue", v);
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  display: flex;
  margin-top: 10px;
  // justify-content: space-between;
  div {
    width: 120px;
    text-align: left;
    color: #666;
    font-weight: bolder;
  }
  input {
    outline: none;
    border: solid 2px green;
  }
}
</style>
