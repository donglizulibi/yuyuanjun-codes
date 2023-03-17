<template>
  <div>
    <input type="text" :value="todo.title" />
    <button>删除</button>
  </div>
</template>

<script setup>
defineProps({
  todo: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
div {
  display: flex;
  input {
    flex: 1;
    padding: 10px;
  }

  button {
    margin-left: 10px;
    font-size: 14px;
  }
}
</style>
