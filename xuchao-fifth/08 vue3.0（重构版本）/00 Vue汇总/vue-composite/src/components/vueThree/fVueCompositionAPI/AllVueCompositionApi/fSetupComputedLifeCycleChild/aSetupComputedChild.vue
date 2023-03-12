<template>
  <div>
    <h5>需要引入computed方法，并在方法中放进一个回调函数</h5>
    <span>这是一个响应式数据：{{ num }}</span>
    <br />
    <span>这是一个计算属性数据：{{ numComputed }}</span>
    <br />
    <button v-on:click="add">增加响应式数据</button>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  setup() {
    let num = ref(1);
    let numComputed = computed(() => {
      return num.value * 2;
    });
    let add = () => {
      num.value++;
    };
    return { num, numComputed, add };
  },
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid black;
}
</style>
