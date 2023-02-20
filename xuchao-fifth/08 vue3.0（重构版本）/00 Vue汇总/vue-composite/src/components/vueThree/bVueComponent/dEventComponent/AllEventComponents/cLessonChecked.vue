<template>
  <h5>把子组件中emit的Api的数组改成对象，把自定义事件字符改成方法</h5>
  <h5>confirm方法的使用</h5>
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
import db from "../../../../../../data/lessonData";
import CheckedChild from "./cLessonCheckedComponent/CheckedChild.vue";
import deepCopy from "../../../../../../utls/deepCopy";
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
