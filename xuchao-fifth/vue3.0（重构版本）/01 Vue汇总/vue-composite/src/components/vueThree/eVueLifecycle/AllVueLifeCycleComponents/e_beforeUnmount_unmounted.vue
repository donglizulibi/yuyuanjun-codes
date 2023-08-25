<template>
  <div>
    <h4>在控制子组件消失之后，在unmounted中清除子组件中的定时器</h4>
    <h5>在unmounted中依旧可以显示组件中的数据</h5>
    <button v-on:click="childState = !childState">控制子组件</button>
    <br />
    <br />
    <child v-if="childState" />
  </div>
</template>

<script>
import child from "./e_beforeUnmount_unmounted_child/e_beforeUnmount_unmounted_child.vue";
export default {
  components: {
    child,
  },
  data() {
    return {
      childState: false,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  border: solid 1px black;
}
</style>
