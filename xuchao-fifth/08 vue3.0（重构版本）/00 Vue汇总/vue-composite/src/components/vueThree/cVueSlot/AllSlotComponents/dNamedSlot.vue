<template>
  <div>
    <h5>具名插槽的使用方法</h5>
    <h5>1 在子组件中使用slot双标签，并使用name属性给不同插槽命名</h5>
    <h5>
      2 在父组件中使用template标签，在标签内使用v-slot:"name"指令来定位子组件中的插槽
    </h5>
    <h5>3 template标签内部需要有一个根标签div，然后插入插槽内容</h5>
    <h5>4 默认插槽的name是default，v-slot可以简写为#</h5>
    <named-slot-child>
      <template v-slot:header>
        <div>
          {{ headerData }}
        </div>
      </template>
      <template #main>
        <div>
          {{ mainData }}
        </div>
      </template>
      <template #footer>
        <div>
          {{ footerData }}
        </div>
      </template>
    </named-slot-child>
  </div>
</template>

<script>
import NamedSlotChild from "./dNamedSlotChild/NamedSlotChild.vue";
export default {
  components: {
    NamedSlotChild,
  },
  data() {
    return {
      headerData: "Here might be a page title",
      mainData: "A paragraph for the main content.",
      footerData: "Here's some contact info",
    };
  },
};
</script>

<style lang="scss" scoped></style>
