<template>
  <div>
    <p>这里是孙组件</p>
    <button v-on:click="updataUser('后代组件传入的参数')">绑定根组件的方法</button>
    <button v-on:click="updataUser('根组件的数据')">恢复根组件的数据</button>
    <br />
    {{ user }}
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const user = inject("user", "这里是后代组件的默认值");

    const updataUser = inject("updataUser");
    return { user, updataUser };
  },
};
</script>

<style lang="scss" scoped>
p {
  margin: auto;
  width: 200px;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
}
button {
  border: 1px solid black;
  margin-left: 10px;
}
</style>
