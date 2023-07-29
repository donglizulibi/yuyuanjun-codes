<template>
  <input
    type="text"
    class="edit-input"
    :value="value"
    @input="onInput"
    @blur="onBlur"
    @click.stop="onClick"
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
  // e.stopPropagation();
  console.log("onclick");
};

const onBlur = (e) => {
  props.setValue(inputValue.value);
};
</script>

<style lang="scss" scoped>
.edit-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid orange;
  text-align: center;
  outline: none;
}
</style>
