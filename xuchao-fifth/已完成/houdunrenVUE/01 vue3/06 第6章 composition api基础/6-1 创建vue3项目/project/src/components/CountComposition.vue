<template>
  <div>
    <button>-</button>
    <span>{{ num }}</span>
    <button @click="add">+</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    console.log(this);
    let num = ref(2);
    let add = () => {
      console.log(num);
      num.value++;
    };
    return { add, num };
  },
};
</script>

<style lang="scss" scoped></style>
