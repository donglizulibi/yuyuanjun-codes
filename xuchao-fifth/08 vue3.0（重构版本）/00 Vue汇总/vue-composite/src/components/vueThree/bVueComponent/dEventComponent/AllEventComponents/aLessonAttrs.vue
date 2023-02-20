<template>
  <h5>img标签的alt属性规定了图片无效时显示的文字</h5>
  <div class="AttrsChild">
    <attrs-child
      v-for="item in attrsData"
      :key="item.id"
      :lesson="item"
      @click="delClick(item.id)"
    ></attrs-child>
  </div>
  <br />
  <button @click="btn">使一张图片失效</button>
  <br />
  <br />
</template>

<script>
import db from "../../../../../../data/lessonData";
import AttrsChild from "./aLessonAttrsComponent/AttrsChild.vue";
import deepCopy from "../../../../../../utls/deepCopy";

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
      let index = this.attrsData.findIndex((val) => val.id == id);
      this.attrsData.splice(index, 1);
    },
    btn() {
      if (this.attrsData[2].preview) {
        this.attrsData[2].preview = "";
      } else {
        this.attrsData[2].preview = "/images/vue3.jpg";
      }
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
