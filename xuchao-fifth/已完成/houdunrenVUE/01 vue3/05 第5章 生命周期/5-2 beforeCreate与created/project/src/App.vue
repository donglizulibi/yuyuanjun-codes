<template>
  <h3>beforeCreate和created</h3>
  <create-com />
  <hr />
  <h3>beforeMount和mounted</h3>
  <mount-com />
</template>

<script>
import CreateCom from "./components/CreateCom.vue";
import MountCom from "./components/MountCom.vue";
export default {
  components: { CreateCom, MountCom },
};
</script>

<style scoped></style>
