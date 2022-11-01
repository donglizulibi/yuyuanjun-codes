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
  <span>父组件title：{{ checkedData[0]["title"] }}</span>

  <!-- 根据引用类型数据的特性，下面也是成立的 -->
  <!-- <span>父组件title：{{ checkedData[0]["title"] }}</span> -->
  <br />
  <span>父组件price：{{ checkedData[0]["price"] }}</span>
</template>

<script>
import db from "../../data/db";
import PriceChild from "./Child/PriceChild.vue";
import deepCopy from "../../utils/deepCopy";

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
