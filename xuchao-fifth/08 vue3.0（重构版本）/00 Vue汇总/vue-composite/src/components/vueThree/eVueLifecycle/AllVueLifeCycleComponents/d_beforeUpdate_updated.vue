<template>
  <div>
    <h4>在template模板更新的时候触发</h4>
    <button v-on:click="updateDataState = !updateDataState">显示文字</button>
    <br />
    <div v-if="updateDataState">{{ updateData }}</div>
    <br />
    <h4>设置一个按钮控制子组件是否挂载</h4>
    <h5>在子组件出现的时候</h5>
    <h5>beforeUpdate无法显示子组件实例，updated可以显示子组件实例</h5>
    <h5>在子组件消失的时候</h5>
    <h5>beforeUpdate可以显示子组件实例，updated无法显示子组件实例</h5>
    <button v-on:click="childState = !childState">控制子组件</button>
    <child v-if="childState" ref="childRef" />

    <br />
    <br />
  </div>
</template>

<script>
import child from "./d_beforeUpdate_updated/d_beforeUpdate_updated_child.vue";
export default {
  components: { child },
  data() {
    return {
      updateDataState: false,
      updateData: "文字",
      childState: false,
    };
  },
  beforeUpdate() {
    console.log("父组件beforeUpdate");
    console.log("beforeUpdate 子组件实例: ", this.$refs.childRef);
  },
  updated() {
    console.log("父组件updated");
    console.log("updated 子组件实例：", this.$refs.childRef);
  },
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid black;
}
</style>
