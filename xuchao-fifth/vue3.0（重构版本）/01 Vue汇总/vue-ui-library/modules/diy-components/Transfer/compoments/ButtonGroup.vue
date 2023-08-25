<template>
  <div class="box button-group">
    <button :disabled="transferDisabled.left" @click="leftButtonClick">&lt;</button>
    <button :disabled="transferDisabled.right" @click="rightButtonClick">&gt;</button>
  </div>
</template>

<script setup>
const props = defineProps({
  transferDisabled: {
    type: Object,
    default: () => {},
  },
  //   checkedData: {
  //     type: Object,
  //     default: () => {},
  //   },
});

const emit = defineEmits(["leftButtonClick", "rightButtonClick"]);
const leftButtonClick = () => {
  emit("leftButtonClick");
};
const rightButtonClick = () => {
  emit("rightButtonClick");
};
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
  border: 1px solid grey;
  width: 120px;
}

.button-group {
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    border: none;
    outline: none;
    border-radius: 5px;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #409eff;
    color: white;
    &:disabled {
      opacity: 0.6;
    }
  }
}
</style>
