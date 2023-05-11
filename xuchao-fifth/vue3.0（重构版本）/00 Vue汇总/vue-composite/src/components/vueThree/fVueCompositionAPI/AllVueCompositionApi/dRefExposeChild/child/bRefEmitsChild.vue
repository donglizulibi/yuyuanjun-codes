<template>
  <div>
    <button v-on:click="desc">减少</button>
    {{ num }}
    <button v-on:click="add">增加</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: ["init"],
  emits: ["change"],
  setup(props, context) {
    const { emit, expose } = context;
    // console.log(emit);

    let num = ref(props.init);
    let add = () => {
      num.value++;
      emit("change");
    };
    let desc = () => {
      num.value--;
      emit("change");
    };
    expose({ num, desc });
    return { add, desc, num };
  },
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid black;
}
</style>
