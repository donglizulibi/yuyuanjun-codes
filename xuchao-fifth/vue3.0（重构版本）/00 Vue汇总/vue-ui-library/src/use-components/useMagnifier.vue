<template>
  <div class="wrapper">
    <magnifier
      :imgUrl="imgUrl"
      :blank="blank"
      :link="link"
      :imgWidth="imgWidth"
      :imgHeight="imgHeight"
      :magWidth="magWidth"
      :magHeight="magHeight"
      :imgAlt="imgAlt"
    ></magnifier>
  </div>
</template>

<script>
import Magnifier from "../../modules/diy-components/Magnifier/Magnifier.vue";
import { reactive, toRefs } from "vue";
export default {
  components: { Magnifier },
  setup() {
    const state = reactive({
      imgUrl: "https://pix2.tvzhe.com/thumb/star/34/52/405x540.jpg",
      blank: true,
      link: "https://www.baidu.com",
      imgWidth: 375,
      imgHeight: 500,
      imgAlt: "裴秀智",
      magWidth: 100,
      magHeight: 100,
    });

    return { ...toRefs(state) };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 375px;
  margin: 100px auto;
}
</style>
