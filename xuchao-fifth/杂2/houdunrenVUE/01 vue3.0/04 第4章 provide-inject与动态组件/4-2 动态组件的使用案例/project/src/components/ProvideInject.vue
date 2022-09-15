<template>
  <div id="div">
    <header>这里是父组件的区域</header>
    <input type="text" v-model="content" />
    <br />
    {{ content }}
    <provide-inject-child />
  </div>
</template>

<script>
import ProvideInjectChild from "./Child/ProvideInjectChild.vue";
import { computed } from "vue";
export default {
  provide() {
    return { webname: computed(() => this.content) };
  },
  components: {
    ProvideInjectChild,
  },
  data() {
    return {
      //   content: { str: "这是父组件的一个字符串..." },
      content: "这是父组件的一个字符串...",
    };
  },
};
</script>

<style lang="scss" scoped>
#div {
  border: 2px solid blue;
  //   display: ;
  padding: 10px 30px 30px 30px;
  header {
    width: 100%;
    text-align: start;
  }
  input {
    width: 200px;
  }
}
</style>
