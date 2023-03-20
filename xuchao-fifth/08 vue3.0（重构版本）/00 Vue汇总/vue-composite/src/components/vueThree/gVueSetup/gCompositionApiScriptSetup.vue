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

    <h3>5）todo例子封装网络请求与复用数据维护</h3>
    <suspense>
      <e-enclosure-request-data />
    </suspense>

    <h3>6）继续抽离Todo的其他功能以及将添加数据功能组件化</h3>
    <suspense>
      <f-enclosure-todo-add-component></f-enclosure-todo-add-component>
    </suspense>

    <h3>7）添加排序相关组件</h3>
    <g-todo-sort-component></g-todo-sort-component>
  </div>
</template>

<script>
import aMockJsonServer from "./AllScriptSetupComponents/aMockJsonServer.vue";
import bAxiosScriptSetup from "./AllScriptSetupComponents/bAxiosScriptSetup.vue";
import cSuspenseSetup from "./AllScriptSetupComponents/cSuspenseSetup.vue";
import dDefinePropsEmits from "./AllScriptSetupComponents/dDefinePropsEmits.vue";
import eEnclosureRequestData from "./AllScriptSetupComponents/eEnclosureRequestData.vue";
import fEnclosureTodoAddComponent from "./AllScriptSetupComponents/fEnclosureTodoAddComponent.vue";
import gTodoSortComponent from "./AllScriptSetupComponents/gTodoSortComponent.vue";
export default {
  components: {
    aMockJsonServer,
    bAxiosScriptSetup,
    cSuspenseSetup,
    dDefinePropsEmits,
    eEnclosureRequestData,
    fEnclosureTodoAddComponent,
    gTodoSortComponent,
  },
};
</script>

<style lang="scss" scoped></style>
