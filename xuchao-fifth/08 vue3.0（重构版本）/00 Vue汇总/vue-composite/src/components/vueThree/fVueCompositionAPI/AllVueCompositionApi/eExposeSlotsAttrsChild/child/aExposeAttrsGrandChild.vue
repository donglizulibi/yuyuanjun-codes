<template>
  <h6>这里要设置inheritAttrs: false，并且子组件模板中不能有根标签</h6>
  <div>
    挂载数据的标签

    {{ num }}
  </div>
  <p></p>
  <span :style="attrs.style">其他标签</span>
</template>

<script>
import { ref } from "vue";
export default {
  inheritAttrs: false,
  setup(_, context) {
    const num = ref(123);
    console.log(123);
    const attrs = context.attrs;
    console.log(context);
    console.log(attrs);
    return { attrs, num };
  },
};
</script>

<style lang="scss" scoped></style>
