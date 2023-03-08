<template>
  <div>这里是子组件的区域</div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const data = ref("这是子组件的数据");
    const func = () => {
      alert(data.value);
    };
    return { data, func };
  },
};
</script>

<style lang="scss" scoped>
div {
  border: 1px solid black;
  cursor: pointer;
}
</style>
