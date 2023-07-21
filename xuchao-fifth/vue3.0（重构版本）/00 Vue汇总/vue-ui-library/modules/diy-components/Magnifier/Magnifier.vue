<template>
  <div
    class="img-warp"
    :style="{
      width: imgWidth + 'px',
      height: imgHeight + 'px',
    }"
  >
    <a
      class="mag-warp"
      :href="link"
      :target="blank ? '_blank' : ''"
      :style="{ width: magWidth + 'px', height: magHeight + 'px' }"
    >
      <img
        class="mag-img"
        :src="imgUrl"
        :alt="imgAlt"
        :style="{ width: imgWidth + 'px', height: imgHeight + 'px' }"
      />
    </a>
    <a class="img-lk" :href="link">
      <img class="static-img" :src="imgUrl" :alt="imgAlt" />
    </a>
  </div>
</template>

<script>
export default {
  name: "Magnifier",
  props: {
    imgWidth: {
      type: Number,
      default: 375,
    },
    imgHeight: {
      type: Number,
      default: 500,
    },
    magWidth: {
      type: Number,
      default: 150,
    },
    magHeight: {
      type: Number,
      default: 150,
    },
    blank: {
      type: Boolean,
      default: false,
    },
    link: String,
    imgUrl: String,
    imgAlt: String,
  },
};
</script>

<style lang="scss" scoped>
.img-warp {
  border: 1px solid #ddd;
  box-shadow: 0 0 5px #999;
  position: relative;
  .static-img {
    width: 100%;
  }

  .mag-warp {
    display: none;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 2;
    background-color: #fff;
    box-shadow: 0 0 3px #000;
    cursor: move;
    overflow: hidden;

    &.show {
      display: block;
      transform: scale(1.5);
    }
    .mag-img {
      position: absolute;
      top: 0px;
      left: 0px;
    }
  }
}
</style>
