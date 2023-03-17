<template>
  <div>
    <h3>1）使用mockjs和json-server在vue中模拟网络数据</h3>
    <a-mock-json-server></a-mock-json-server>

    <h3>2）使用axios在script-setup中获取数据</h3>
    <b-axios-script-setup></b-axios-script-setup>

    <h3>3）使用suspense处理全局异步</h3>
    <c-suspense-setup></c-suspense-setup>

    <h3>4）defineProps与defineEmits的使用</h3>
    <d-define-props-emits></d-define-props-emits>
  </div>
</template>

<script>
import aMockJsonServer from "./AllScriptSetupComponents/aMockJsonServer.vue";
import bAxiosScriptSetup from "./AllScriptSetupComponents/bAxiosScriptSetup.vue";
import cSuspenseSetup from "./AllScriptSetupComponents/cSuspenseSetup.vue";
import dDefinePropsEmits from "./AllScriptSetupComponents/dDefinePropsEmits.vue";
export default {
  components: {
    aMockJsonServer,
    bAxiosScriptSetup,
    cSuspenseSetup,
    dDefinePropsEmits,
  },
};
</script>

<style lang="scss" scoped></style>
