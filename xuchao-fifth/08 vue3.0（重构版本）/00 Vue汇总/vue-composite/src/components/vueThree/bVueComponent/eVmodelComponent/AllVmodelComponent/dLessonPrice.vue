<template>
  <div class="EmitChild">
    <price-child
      v-for="item in checkedData"
      :key="item.id"
      :lesson="item"
      @hd="delClick"
      v-model="item.title"
      v-model:price="item.price"
    ></price-child>
  </div>
  <div>
    父组件title：
    <span v-for="item in checkedData" v-bind:key="item.id"
      >{{ item.title }}&nbsp;&nbsp;&nbsp;&nbsp;</span
    >
  </div>

  <br />
  <div>
    父组件price：
    <span v-for="item in checkedData" v-bind:key="item.id"
      >{{ item.price }}&nbsp;&nbsp;&nbsp;&nbsp;</span
    >
  </div>
</template>

<script>
import db from "../../../../../../data/lessonData.js";
import PriceChild from "./dLessonPriceChild/PriceChild.vue";
import deepCopy from "../../../../../../utls/deepCopy.js";

let priceArr = [{ price: 123 }, { price: 54 }, { price: 66 }];
console.log(deepCopy(db));
let dataPlus = deepCopy(db).map((item, index) => {
  return Object.assign(item, priceArr[index]);
});

export default {
  components: {
    PriceChild,
  },
  data() {
    return {
      checkedData: dataPlus,
      titleContent: "",
      priceContent: "",
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
