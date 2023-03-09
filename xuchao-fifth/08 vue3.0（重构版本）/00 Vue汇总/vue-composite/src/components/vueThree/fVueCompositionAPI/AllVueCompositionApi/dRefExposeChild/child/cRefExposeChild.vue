<template>
  <div>子组件的区域</div>
</template>

<script>
import { ref } from "vue";
export default {
  setup(_, context) {
    // console.log(context);
    const num = ref(1);
    const add = () => {
      return 123;
    };
    const desc = () => {
      return 312;
    };
    const { expose } = context;
    // expose({ num });
    return { num, add, desc };
  },
};
</script>

<style lang="scss" scoped></style>
