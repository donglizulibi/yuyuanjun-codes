<template>
  <list-item v-for="article of articles" :key="article.id" :article="article"></list-item>
</template>

<script setup>
import { ref } from "vue";
import api from "../api";
import ListItem from "../components/ListItem.vue";

const articles = ref(await api.all());
</script>

<style lang="scss" scoped></style>
