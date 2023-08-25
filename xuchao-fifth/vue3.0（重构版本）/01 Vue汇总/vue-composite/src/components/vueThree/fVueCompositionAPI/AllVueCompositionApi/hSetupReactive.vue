<template>
  <div>
    <button v-on:click="change1">修改ref的数据</button>
    {{ hd1 }}
    <br />
    <button v-on:click="change2">修改reactive的数据</button>
    {{ hd2 }}
    <br />
    <h4>总结</h4>
    <h5>1 如果setup中要使用的数据是基本类型，为实现响应式只能放在ref中</h5>
    <h5>2 如果数据是引用类型，则可以放在ref中，也可以放在reactive中</h5>
    <h5>3 无论是什么类型，如果放在ref中则在数据修改的时候需要调用value属性</h5>
    <h5>4 修改放在reactive中的引用类型数据不需要调用value</h5>
    <br />
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const hd1 = ref({ name: "houdunren" });
    const hd2 = reactive({ name: "houdunren" });
    const change1 = () => {
      if (hd1.value.name == "houdunren") {
        hd1.value.name = "hdcms";
      } else {
        hd1.value.name = "houdunren";
      }
    };
    const change2 = () => {
      if (hd2.name == "houdunren") {
        hd2.name = "hdcms";
      } else {
        hd2.name = "houdunren";
      }
    };
    return { hd1, hd2, change1, change2 };
  },
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid black;
  margin-bottom: 5px;
}
</style>
