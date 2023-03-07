<template>
  <div>
    <button v-on:click="desc">-</button>
    {{ num }}
    <button v-on:click="add">+</button>
    <br />
    <br />
    <!-- <button v-on:click="stopWatchEffect"></button> -->
  </div>
</template>

<script>
import { ref, watch, watchEffect } from "vue";

export default {
  setup() {
    let num = ref(2);
    let add = () => {
      num.value++;
    };
    let desc = () => {
      num.value--;
    };

    watch(num, (v, w) => {
      console.log(v, w);
      if (v < 0) num.value = 0;
    });

    const stop = watchEffect(() => {
      if (num.value > 5) num.value = 5;
    });
    console.dir(stop);
    // stop();
    // console.dir(stop);

    // let state = false
    // let stopWatchEffect = ()=>{
    //     if
    // }

    return { num, add, desc };
  },
};
// export default {
//   data() {
//     return {
//       num: 2,
//     };
//   },
//   methods: {
//     add() {
//       this.num++;
//     },
//     desc() {
//       this.num--;
//     },
//   },
// };
</script>

<style lang="scss" scoped>
button {
  border: 1px solid black;
}
</style>
