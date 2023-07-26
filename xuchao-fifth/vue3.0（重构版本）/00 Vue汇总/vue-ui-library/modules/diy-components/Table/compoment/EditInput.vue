<template>
  <input
    type="text"
    class="edit-input"
    :value="value"
    @input="onInput"
    @blur="onBlur"
    @click="onClick"
  />
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  value: {
    type: String,
    default: "",
  },
  setValue: {
    type: Function,
    default: () => {},
  },
});

const inputValue = ref(props.value);

const onInput = (e) => {
  inputValue.value = e.target.value.trim();
};

const onClick = (e) => {
  e.stopPropagation();
  console.log("onclick");
};

const onBlur = (e) => {
  //   console.log(123);
  props.setValue(inputValue.value);
};
</script>

<style lang="scss" scoped></style>
