<template>
  <div class="show">
    <!-- {{ $route }} -->
    <h2>{{ user.name }}</h2>
  </div>
</template>

<script setup>
import useUser from "@/api/user";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const id = route.params.id;
const user = ref(await useUser.find(id));
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
  line-height: 1.6em;
}
</style>
