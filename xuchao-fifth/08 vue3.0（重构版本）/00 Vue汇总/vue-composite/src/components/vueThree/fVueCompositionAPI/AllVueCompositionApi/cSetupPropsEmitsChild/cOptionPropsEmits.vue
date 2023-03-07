<template>
  <div>
    <c-option-props-emits-child
      :valueData="database"
      @change="getData"
    ></c-option-props-emits-child>

    <br />

    <h5>父组件区域：</h5>
    {{ database }}
    <br />
    <input type="text" @input="database = $event.target.value" :value="database" />
  </div>
</template>

<script>
import cOptionPropsEmitsChild from "./child/cOptionPropsEmitsChild.vue";
export default {
  components: {
    cOptionPropsEmitsChild,
  },
  data() {
    return {
      database: "父组件数组初始值",
      //   valueData: "父组件数组初始值",
    };
  },
  methods: {
    getData(event) {
      console.log(event);
      this.database = event;
    },
  },
};
</script>

<style lang="scss" scoped></style>
