<template>
  <div>
    <c-ref-expose-child ref="childComponent"></c-ref-expose-child>
    父组件的区域

    <h5>
      1 父组件要想在setup中使用ref调取子组件实例，需要在setup中把子组件ref的值返回出来
    </h5>
    <h5>
      2
      子组件setup的第二个参数对象中有expose函数，可以放进想传递给父组件的数据，没有放进去的数据不会暴露出来
    </h5>
    <br />
  </div>
</template>

<script>
import cRefExposeChild from "./child/cRefExposeChild.vue";
import { ref, onMounted } from "vue";
export default {
  components: {
    cRefExposeChild,
  },
  setup() {
    const childComponent = ref();
    onMounted(() => {
      // console.log(123);
      console.log(childComponent);
      console.log(childComponent.value.num);
      console.log(childComponent.value.add);
      console.log(childComponent.value.desc);
    });

    return { childComponent };
  },
};
</script>

<style lang="scss" scoped></style>
