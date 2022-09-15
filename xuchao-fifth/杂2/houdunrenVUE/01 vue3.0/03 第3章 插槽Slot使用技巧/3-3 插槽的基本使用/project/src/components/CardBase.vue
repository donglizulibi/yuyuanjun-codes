<template>
  <div>
    <h4>插入纯文本</h4>
    <card-base-child>{{ content }}</card-base-child>
    <h4>插入标签</h4>
    <card-base-child>
      <input type="text" value="这是一个标签" />
    </card-base-child>
    <h4>插入组件</h4>
    <card-base-child>
      <span>这是一个组件</span>
      <hd-button />
    </card-base-child>
  </div>
</template>

<script>
import CardBaseChild from "./Child/CardBaseChild.vue";
import HdButton from "./Tool/Button.vue";
export default {
  data() {
    return {
      content: "这是一个纯文本",
    };
  },
  components: {
    CardBaseChild,
    HdButton,
  },
};
</script>

<style lang="scss" scoped></style>
