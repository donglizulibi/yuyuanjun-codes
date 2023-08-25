<template>
  <div>
    <button v-on:click="desc">-</button>
    {{ num }}
    <button v-on:click="add">+</button>
  </div>
</template>

<script>
// import { ref } from "vue";
// export default {
//   setup() {
//     let num = ref(2);
//     let add = () => {
//       num.value++;
//     };
//     let desc = () => {
//       num.value--;
//     };
//     return { num, add, desc };
//   },
// };
export default {
  data() {
    return {
      num: 2,
    };
  },
  methods: {
    add() {
      this.num++;
    },
    desc() {
      this.num--;
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid black;
}
</style>
