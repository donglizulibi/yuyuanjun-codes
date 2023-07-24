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
  <br />
</template>

<script>
import Magnifier from "../../modules/diy-components/Magnifier/Magnifier.vue";
import { reactive, toRefs } from "vue";
export default {
  components: { Magnifier },
  setup() {
    const state = reactive({
      imgUrl: `https://p8.itc.cn/q_70/images03/20230424
/d58e9cff8ed14d85891a3d1f7d2561cb.jpeg`,
      blank: true,
      link: "https://www.baidu.com",
      imgWidth: 375,
      imgHeight: 537,
      imgAlt: "xiaotian",
      magWidth: 150,
      magHeight: 150,
    });

    return { ...toRefs(state) };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 375px;
  margin: 20px auto;
}
</style>
