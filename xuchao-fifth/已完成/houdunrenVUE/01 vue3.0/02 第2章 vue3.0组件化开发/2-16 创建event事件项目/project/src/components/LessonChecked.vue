<template>
  <div class="EmitChild">
    <checked-child
      v-for="item in checkedData"
      :key="item.id"
      :lesson="item"
      @hd="delClick"
    ></checked-child>
  </div>
</template>

<script>
import db from "../../data/db";
import CheckedChild from "./Child/CheckedChild.vue";
import deepCopy from "../../utils/deepCopy";
export default {
  components: {
    CheckedChild,
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
