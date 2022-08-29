<template>
  <h3>beforeCreate和created</h3>
  <before-create-vue></before-create-vue>
  <hr />
  <h3>beforeMount和mounted</h3>
  <before-mount-vue></before-mount-vue>
</template>

<script>
import beforeCreateVue from "./components/beforeCreate.vue";
import beforeMountVue from "./components/beforeMount.vue";
export default {
  components: { beforeCreateVue, beforeMountVue },
};
</script>

<style scoped></style>
