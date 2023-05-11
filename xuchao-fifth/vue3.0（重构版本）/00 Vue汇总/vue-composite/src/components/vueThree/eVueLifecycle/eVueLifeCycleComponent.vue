<template>
  <div>
    <h3>1）生命周期钩子集合</h3>
    <a-all-life-cycle-api></a-all-life-cycle-api>

    <h3>2）beforeCreate和created</h3>
    <b-before-create-created></b-before-create-created>

    <h3>3）beforeMount和mounted</h3>
    <c-before-mount-mounted></c-before-mount-mounted>

    <h3>4）beforeUpdate和updated</h3>
    <d-before-update-updated></d-before-update-updated>

    <h3>5）beforeUnmount和unmounted</h3>
    <e-before-unmount-unmounted></e-before-unmount-unmounted>
  </div>
</template>

<script>
import aAllLifeCycleApi from "./AllVueLifeCycleComponents/aAllLifeCycleApi.vue";
import bBeforeCreateCreated from "./AllVueLifeCycleComponents/b_beforeCreate_created.vue";
import cBeforeMountMounted from "./AllVueLifeCycleComponents/c_beforeMount_mounted.vue";
import dBeforeUpdateUpdated from "./AllVueLifeCycleComponents/d_beforeUpdate_updated.vue";
import eBeforeUnmountUnmounted from "./AllVueLifeCycleComponents/e_beforeUnmount_unmounted.vue";
export default {
  components: {
    aAllLifeCycleApi,
    bBeforeCreateCreated,
    cBeforeMountMounted,
    dBeforeUpdateUpdated,
    eBeforeUnmountUnmounted,
  },
};
</script>

<style lang="scss" scoped></style>
