<template>
  <div class="main">
    <div v-for="data of db" :key="data.id">
      <todo :dataPass="data"></todo>
    </div>

    <hd></hd>
  </div>
</template>

<script>
import hd from "./aBasePropsComponents/hd.vue";
import Todo from "./aBasePropsComponents/Todo.vue";
export default {
  components: {
    hd,
    Todo,
  },
  data() {
    return {
      db: [
        { id: 1, title: "我好饿" },
        { id: 2, title: "我好困" },
        { id: 3, title: "我要吃饭" },
        { id: 4, title: "我要睡觉" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin: auto;
  width: 500px;
}
</style>
