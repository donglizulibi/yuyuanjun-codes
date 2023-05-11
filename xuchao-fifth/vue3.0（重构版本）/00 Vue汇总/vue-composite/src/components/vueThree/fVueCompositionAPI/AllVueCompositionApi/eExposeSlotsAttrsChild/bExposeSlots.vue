<template>
  <div>
    <h5>
      这里的插槽是在父组件模板的子组件的双标签中加入一些标签或者组件，使之成为默认组件
    </h5>
    <h5>然后在setup的expose中接到这些添加的内容，再通过component动态标签和is属性选择</h5>
    <h5>来确定具体的标签或组件需要在子组件哪个位置，来达到插槽的同等效果</h5>
    <b-expose-slots-child>
      父组件插入的文字
      <div>父组件插入的div标签</div>
      <some>父组件插入的some标签</some>
    </b-expose-slots-child>
    <br />
  </div>
</template>

<script>
import some from "./child/some.vue";
import bExposeSlotsChild from "./child/bExposeSlotsChild.vue";
export default {
  components: {
    some,
    bExposeSlotsChild,
  },
};
</script>

<style lang="scss" scoped></style>
