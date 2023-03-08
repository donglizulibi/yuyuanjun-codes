<template>
  <div>
    <button v-on:click="desc">-</button>
    {{ num }}
    <button v-on:click="add">+</button>
    <br />
    <br />
  </div>
</template>

<script>
import { ref, watch, watchEffect } from "vue";

export default {
  emits: ["change"],

  props: {
    init: {
      type: Number,
      default: 3,
      validator(v) {
        console.log(v);
        if (typeof v != "number" || v > 5) {
          return false;
        } else {
          return true;
        }
      },
    },
  },
  setup(props, context) {
    console.log(props);
    console.log(context);
    const emit = context.emit;

    let num = ref(props.init);
    let add = () => {
      num.value++;
      emit("change", num.value);
    };
    let desc = () => {
      num.value--;
      emit("change", num.value);
    };

    watch(num, (v, w) => {
      console.log(v, w);
      if (v < 0) num.value = 0;
    });

    const stop = watchEffect(() => {
      if (num.value > 5) num.value = 5;
    });
    console.dir(stop);

    return { num, add, desc };
  },
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid black;
}
</style>
