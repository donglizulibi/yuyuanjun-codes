<template>
  <div>
    <named-slot-child>
      <template v-slot:header>
        <div>
          {{ headerData }}
        </div>
      </template>
      <template #main>
        <div>
          {{ mainData }}
        </div>
      </template>
      <template #footer>
        <div>
          {{ footerData }}
        </div>
      </template>
    </named-slot-child>
  </div>
</template>

<script>
import NamedSlotChild from "./Child/NamedSlotChild.vue";
export default {
  components: {
    NamedSlotChild,
  },
  data() {
    return {
      headerData: "Here might be a page title",
      mainData: "A paragraph for the main content.",
      footerData: "Here's some contact info",
    };
  },
};
</script>

<style lang="scss" scoped></style>
