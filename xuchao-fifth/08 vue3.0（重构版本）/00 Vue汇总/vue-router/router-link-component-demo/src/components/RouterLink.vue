<template>
  <div>
    <a href="#" v-on:click.prevent="pathClcik">
      <slot />
    </a>
  </div>
</template>

<script setup>
import { path } from "../router/index";
console.log(path);

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
console.log(props);
const pathClcik = () => {
  console.log(props.to);
  path.value = props.to;
};
</script>

<style lang="scss" scoped></style>
