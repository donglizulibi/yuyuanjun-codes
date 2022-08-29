<template>
  <div>
    <slot>
      后备内容
      <!-- <hd-button></hd-button> -->
      <!-- <div class="hd">后备内容</div>  -->
    </slot>
  </div>
</template>

<script>
import HdButton from "./Button.vue";
export default {
  components: { HdButton },
};
</script>

<style lang="scss" scoped>
.hd {
  background-color: aqua;
}
</style>
