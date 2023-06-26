<template>
  <div>
    <div
      v-for="item of listData"
      :key="item.id"
      :class="['list-item', item.disabled ? 'disabled' : '']"
    >
      <input
        type="checkbox"
        :id="'checkbox__' + item.id"
        :disabled="item.disabled"
        @click="checkboxClick($event.target.checked, leftOrRight, item)"
      />

      <label :for="'checkbox__' + item.id">
        {{ item.phone_name }}
      </label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  leftOrRight: {
    type: String,
    default: "left",
  },
  listData: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["checkboxClick"]);
const checkboxClick = (checked, leftOrRight, item) => {
  emit("checkboxClick", checked, leftOrRight, item);
};
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: center;
  //   background-color: #409eff;
  color: #666;
  font-size: 14px;
  height: 30px;
  &.disabled {
    opacity: 0.6;
  }
}
</style>
