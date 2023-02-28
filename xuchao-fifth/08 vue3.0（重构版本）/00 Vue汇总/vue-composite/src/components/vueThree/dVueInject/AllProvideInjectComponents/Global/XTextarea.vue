<template>
  <label>
    <div>{{ titleData }}:&nbsp;</div>
    <textarea
      type="text"
      v-model="modelValueData"
      :rows="rowsNum"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    modelValue: {
      type: String,
    },
    rows: {
      type: Number,
      default: 3,
      validator(v) {
        console.log(v);
        return 1;
      },
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      titleData: this.title,
      modelValueData: this.modelValue,
      rowsNum: this.rows,
    };
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
  textarea {
    outline: none;
    border: solid 2px green;
  }
}
</style>
