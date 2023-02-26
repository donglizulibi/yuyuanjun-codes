<template>
  <h5>在子组件的props中以v-model的props属性+Modifiers（如titleModifiers）的方式</h5>
  <h5>来定义新的props属性，就可以接到集合了父组件中这个v-model属性的所有修饰符的对象</h5>
  <h5>number修饰符不是自定义的</h5>
  <div class="EmitChild">
    <modifier-child
      v-for="item in checkedData"
      :key="item.id"
      :lesson="item"
      @hd="delClick"
      v-model:title.uppercase.substr_2="item.title"
      v-model:price.number.substr_5="item.price"
    ></modifier-child>
  </div>
</template>

<script>
import db from "../../../../../../data/lessonData.js";
import ModifierChild from "./eLessonModifierChild/ModifierChild.vue";
import deepCopy from "../../../../../../utls/deepCopy.js";

let priceArr = [{ price: 123 }, { price: 54 }, { price: 66 }];
console.log(deepCopy(db));
let dataPlus = deepCopy(db).map((item, index) => {
  return Object.assign(item, priceArr[index]);
});

export default {
  components: {
    ModifierChild,
  },
  data() {
    return {
      checkedData: dataPlus,
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
