<template>
  <div>
    <h4>在html标签中使用ref和document.queryselector是一样的</h4>
    <button @click="onClick">调用input标签</button>
    <button @click="clear">清空</button>
    <br />
    <br />
    <input type="text" ref="input" id="hd" />
    <br />
    <br />

    <h4>在组件中使用ref有所不同，找到的是一个关于该组件的实例对象</h4>
    <h4>包含了该组件的数据、方法、插槽、props等</h4>
    <h4>所以在组件中使用ref也是一种调用子组件方法和数据的方式</h4>
    <!-- <ref-components-one></ref-components-one>
    <ref-components-two></ref-components-two> -->
    <button @click="switchComponent">切换组件</button>
    <component :is="currentComponent" ref="componentRef" id="componentId"></component>

    <br />
    <br />
    <button @click="onComponent">调用component动态组件</button>
    <br />
    <div v-if="refData">{{ refData }}</div>
  </div>
</template>

<script>
import RefComponentsOne from "./eRefComponents/RefComponentsOne.vue";
import RefComponentsTwo from "./eRefComponents/RefComponentsTwo.vue";
export default {
  data() {
    return {
      currentComponent: "ref-components-one",
      refData: "",
    };
  },
  components: {
    RefComponentsOne,
    RefComponentsTwo,
  },
  methods: {
    switchComponent() {
      this.refData = "";
      if (this.currentComponent == "ref-components-one") {
        this.currentComponent = "ref-components-two";
      } else {
        this.currentComponent = "ref-components-one";
      }
    },
    clear() {
      this.$refs.input.value = "";
    },
    onClick() {
      console.dir(this.$refs.input);
      this.$refs.input.value = "houdunren";

      let hd = document.querySelector("#hd");
      console.dir(hd);
      console.log(hd === this.$refs.input);
    },
    onComponent() {
      console.log(this.$refs);

      if ("show" in this.$refs.componentRef) {
        this.$refs.componentRef.show();
        this.refData = this.$refs.componentRef.text;
      } else {
        // alert("这个组件没有此方法");
        this.refData = "这个组件没有此方法";
      }

      let com = document.querySelector("#componentId");
      console.log(com);
      console.dir(com == this.$refs.componentRef);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  border: 1px solid black;
  margin-left: 10px;
}
</style>
