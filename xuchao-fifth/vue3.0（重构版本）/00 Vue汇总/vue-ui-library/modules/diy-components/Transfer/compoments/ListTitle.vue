<template>
  <div class="box-head">
    <h1 class="list-title">
      <input
        :id="chooseAllId"
        type="checkbox"
        :disabled="disabledState"
        @click="chooseAll($event.target.checked, listData, checkedData)"
      />{{ title }}
    </h1>
    <div>{{ checkedData[side].length }}/{{ listData.length }}</div>
  </div>
</template>

<script setup>
import { watch } from "vue";
const props = defineProps({
  checkedData: {
    type: Object,
    default: () => {},
  },
  listData: {
    type: Array,
    default: () => [],
  },
  title: {
    type: String,
    default: "标题",
  },
  chooseAllId: {
    type: String,
    default: "",
  },
  disabledState: {
    type: Boolean,
    default: false,
  },
  side: {
    type: String,
    default: "left",
  },
});

// watch(props, () => {
//   console.log(props.checkedData);
// });

const emit = defineEmits(["chooseAll"]);

const chooseAll = (checked, listData, checkedData) => {
  emit("chooseAll", checked, listData, checkedData);
};
</script>

<style lang="scss" scoped>
.box-head {
  display: flex;
  background-color: #ddd;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;

  .list-title {
    font-size: 16px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #666;
    font-weight: normal;
    margin: 0;
    border-bottom: 1px solid #ddd;
  }
}
</style>
