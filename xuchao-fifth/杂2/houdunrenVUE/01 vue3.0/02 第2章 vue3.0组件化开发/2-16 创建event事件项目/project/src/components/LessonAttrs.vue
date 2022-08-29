<template>
  <div class="AttrsChild">
    <attrs-child
      v-for="item in attrsData"
      :key="item.id"
      :lesson="item"
      @click="delClick(item.id)"
    ></attrs-child>
  </div>
</template>

<script>
import db from "../../data/db";
import AttrsChild from "./Child/AttrsChild.vue";
import deepCopy from "../../utils/deepCopy";
export default {
  components: {
    AttrsChild,
  },
  data() {
    return {
      attrsData: deepCopy(db),
    };
  },
  methods: {
    delClick(id) {
      console.log(1);
      let index = this.attrsData.findIndex((val) => val.id == id);
      this.attrsData.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.AttrsChild {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
}
</style>
