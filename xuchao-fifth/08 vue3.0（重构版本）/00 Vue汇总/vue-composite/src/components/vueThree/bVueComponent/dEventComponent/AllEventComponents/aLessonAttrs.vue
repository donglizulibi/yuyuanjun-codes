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
  <h5>这里是在父组件的子组件标签上定义点击事件</h5>
  <h5>然后通过attrs传递给子组件某个标签上，使得这个标签具备点击事件的功能</h5>
  <h5>这样的做法会把一些子组件不需要的属性也传递过去</h5>
  <h5>
    另外，在子组件中设置inheritAttrs: false,
    让子组件不必考虑要由哪个标签来继承父组件的attrs
  </h5>
  <h5>如果不设置这个属性，则在子组件模板中有根标签的情况下，会直接由根标签继承</h5>
  <h5>如果没有根标签，则子组件不确定由哪个标签继承，就会报错</h5>
  <h5>设置以后，子组件就完全不考虑这件事，转为程序员手动控制</h5>
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
