<template>
  <div class="text">
    <button @click="this.textState = !this.textState">
      {{ this.textState ? "收起" : "展开" }}
    </button>
    <pre v-if="textState">{{ text.str }}</pre>
    <br />
    <br />
  </div>
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
// import EmitChild from "./Child/EmitChild.vue";

import db from "../../../../../../data/lessonData";
import EmitChild from "./bLessonEmitComponent/EmitChild.vue";
import deepCopy from "../../../../../../utls/deepCopy";
import text from "./bLessonEmitComponent/text";
export default {
  components: {
    EmitChild,
  },
  data() {
    return {
      passData: "",
      emitData: deepCopy(db),
      text,
      textState: false,
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
pre {
  width: 600px;

  text-align: left;
  margin: auto;
  // padding-left: 50px;
}
.EmitChild {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
}
</style>
