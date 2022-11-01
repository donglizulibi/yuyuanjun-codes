<template>
  <div>
    <card>
      <template #header> 站点信息 </template>
      <template #default>
        <x-input title="title" v-model="config.site.title"></x-input>
        <x-input title="tel" v-model="config.site.tel"></x-input>
        <x-input title="mail" v-model="config.site.mail"></x-input>
        <x-textarea :rows="7" title="desc" v-model="config.site.desc"></x-textarea>
      </template>
    </card>
    {{ config }}
  </div>
</template>

<script>
export default {
  inject: ["config"],
  methods: {
    show() {
      console.log("site的show方法");
    },
  },
};
</script>

<style lang="scss" scoped></style>
