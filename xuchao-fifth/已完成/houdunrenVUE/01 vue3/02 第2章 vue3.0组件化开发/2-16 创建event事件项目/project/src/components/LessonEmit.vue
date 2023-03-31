<template>
  <div class="EmitChild">
    <emit-child
      v-for="item in emitData"
      :key="item.id"
      :lesson="item"
      @hd="delClick($event, item.id)"
    ></emit-child>
  </div>
  <p>父组件的区域: {{ passData }}</p>
</template>

<script>
import db from "../../data/db";
import EmitChild from "./Child/EmitChild.vue";
import deepCopy from "../../utils/deepCopy";
export default {
  components: {
    EmitChild,
  },
  data() {
    return {
      passData: "",
      emitData: deepCopy(db),
    };
  },
  methods: {
    delClick(event, id) {
      console.log(id);
      console.log(event);
      this.passData = event;
      let index = this.emitData.findIndex((val) => val.id == id);
      this.emitData.splice(index, 1);
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
