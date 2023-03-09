<template>
  <div>
    <h5>将inheritAttrs设置为false</h5>
    <h6>如果不设置inheritAttrs，而子组件template里又有多个元素</h6>
    <h6>则父组件上的属性等非props数据不知道要传给哪个元素</h6>
    <non-props-inherit-attrs
      buttonType="success"
      contentStr="houdunren"
      id="hdcms"
      class="hd"
    ></non-props-inherit-attrs>

    <h5>在子组件中需要接收来自父组件的非props属性或数据的元素上使用v-bind="$attrs"</h5>
    <non-props-v-bind
      buttonType="success"
      contentStr="houdunren"
      id="hdcms"
      class="hd"
    ></non-props-v-bind>
  </div>
</template>

<script>
import NonPropsInheritAttrs from "./hButtonSingleNonPropsComponent/NonPropsInheritAttrs.vue";
import NonPropsVBind from "./hButtonSingleNonPropsComponent/NonPropsVBind.vue";
export default {
  components: {
    NonPropsInheritAttrs,
    NonPropsVBind,
  },
};
</script>

<style lang="scss" scoped></style>
