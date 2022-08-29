<template>
  <div class="EmitChild">
    <double-child
      v-for="item in checkedData"
      :key="item.id"
      :lesson="item"
      @hd="delClick"
      v-model="item.title"
    ></double-child>
    <!-- {{ checkedData }} -->
  </div>
  <p>父组件：{{ checkedData[0]["title"] }}</p>
</template>

<script>
import db from "../../data/db";
import DoubleChild from "./Child/DoubleChild.vue";
import deepCopy from "../../utils/deepCopy";
export default {
  components: {
    DoubleChild,
  },
  data() {
    return {
      checkedData: deepCopy(db),
    };
  },
  methods: {
    delClick(id) {
      console.log(id);
      let index = this.checkedData.findIndex((val) => val.id == id);
      this.checkedData.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.EmitChild {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
}
</style>
