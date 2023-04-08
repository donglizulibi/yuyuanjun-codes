<template>
  <router-link :to="`/show/${article.id}`">
    <div class="list-item">
      {{ article.title }}
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  article: {
    type: Object,
  },
});
</script>

<style lang="scss" scoped>
.list-item {
  background-color: forestgreen;
  color: aliceblue;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
