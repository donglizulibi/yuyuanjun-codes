<template>
  <div>
    <card>
      <template #header> 微信管理 </template>
      <template #default>
        <x-input title="appid" v-model="config.wexin.appid"></x-input>
        <x-input title="secret" v-model="config.wexin.secret"></x-input>
        <x-input title="wechatName" v-model="config.wexin.wechatName"></x-input>
        <x-textarea :rows="7" title="desc" v-model="config.wexin.desc"></x-textarea>
        <x-input title="teacher" v-model="content"></x-input>
      </template>
    </card>
    <pre style="text-align: left">
    {{ config }}
    </pre>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(this.config);
  },
  inject: ["config"],
  data() {
    return {
      content: "houdunren",
    };
  },
};
</script>

<style lang="scss" scoped></style>
