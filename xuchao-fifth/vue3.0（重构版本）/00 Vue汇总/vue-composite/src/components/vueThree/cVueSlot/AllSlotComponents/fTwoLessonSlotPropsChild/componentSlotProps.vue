<template>
  <div>
    <com-slot-props-child #default="{ Component }">
      <component :is="Component" />
    </com-slot-props-child>
  </div>
</template>

<script setup>
import comSlotPropsChild from "./componentSlotPropsChild/comSlotPropsChild.vue";
</script>

<style lang="scss" scoped></style>
