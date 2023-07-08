<template>
  <div
    class="img-warp"
    :style="{
      width: imgWidth + 'px',
      height: imgHeight + 'px',
    }"
  >
    <a class="mag-warp" :href="link" :target="blank ? '_blank' : ''"></a>
  </div>
</template>

<script>
export default {
  name: "Magnifier",
  props: {
    // imgUrl: "https://pix2.tvzhe.com/thumb/star/34/52/405x540.jpg",
    // blank: true,
    // link: "https://www.baidu.com",
    // imgWidth: 375,
    // imgHeight: 500,
    // magWidth: 100,
    // magHeight: 100,
  },
};
</script>

<style lang="scss" scoped></style>
