<script setup></script>

<template>
  <!-- <router-link to="/">home</router-link>
  <router-link to="article">article</router-link> -->
  <suspense>
    <template #default>
      <div class="router-view">
        <router-view />
      </div>
    </template>
  </suspense>
</template>

<style scoped></style>
