<template>
  <div class="pagination">
    <div>
      <button @click="prePage">上一页</button>
    </div>

    <div>
      <button
        :disabled="i == '...'"
        :class="{ active: i == currentPage, disable: i == '...' }"
        v-for="(i, index) in pages"
        :key="index"
        @click="changePage(i)"
      >
        {{ i }}
      </button>
    </div>

    <div>
      <button @click="nextPage">下一页</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
let props = defineProps(["totalPagesData", "modelValue"]);
let { modelValue, totalPagesData } = props;
const totalPages = ref(totalPagesData);
const currentPage = ref(modelValue);

watch(props, (v) => {
  currentPage.value = v.modelValue;
  totalPages.value = v.totalPagesData;
});
let emit = defineEmits(["update:modelValue"]);
const changePage = (i) => {
  currentPage.value = i;
  emit("update:modelValue", currentPage.value);
};
const prePage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    emit("update:modelValue", currentPage.value);
  }
};
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    emit("update:modelValue", currentPage.value);
  }
};

let pages = computed(() => {
  currentPage.value = currentPage.value * 1;
  if (totalPages.value < 9) {
    return totalPages.value;
  } else {
    if (currentPage.value < 5) {
      return [1, 2, 3, 4, 5, 6, "...", totalPages.value];
    } else if (currentPage.value > totalPages.value - 4) {
      return [
        1,
        "...",
        totalPages.value - 5,
        totalPages.value - 4,
        totalPages.value - 3,
        totalPages.value - 2,
        totalPages.value - 1,
        totalPages.value,
      ];
    } else {
      return [
        1,
        "...",

        currentPage.value - 1,
        currentPage.value,
        currentPage.value + 1,
        currentPage.value + 2,
        "...",
        totalPages.value,
      ];
    }
  }
});

// export default {
//   props: ["totalPages", "currentPageData"],
//   emits: ["current"],
//   data() {
//     return {
//       currentPage: currentPageData,
//     };
//   },
//   methods: {
//     changePage(i) {
//       this.currentPage = i;
//       this.$emit("current", this.currentPage);
//     },
//     prePage() {
//       if (this.currentPage > 1) {
//         this.currentPage--;
//         this.$emit("current", this.currentPage);
//       }
//     },
//     nextPage() {
//       if (this.currentPage < this.totalPages) {
//         this.currentPage++;
//         this.$emit("current", this.currentPage);
//       }
//     },
//   },
//   computed: {
//     pages() {
//       if (this.totalPages < 9) {
//         return this.totalPages;
//       } else {
//         if (this.currentPage < 5) {
//           return [1, 2, 3, 4, 5, 6, "...", this.totalPages];
//         } else if (this.currentPage > this.totalPages - 4) {
//           return [
//             1,
//             "...",
//             this.totalPages - 5,
//             this.totalPages - 4,
//             this.totalPages - 3,
//             this.totalPages - 2,
//             this.totalPages - 1,
//             this.totalPages,
//           ];
//         } else {
//           return [
//             1,
//             "...",

//             this.currentPage - 1,
//             this.currentPage,
//             this.currentPage + 1,
//             this.currentPage + 2,
//             "...",
//             this.totalPages,
//           ];
//         }
//       }
//     },
//   },
//   watch: {},
// };
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;
    &.disable {
      color: #c0c4cc;
      cursor: not-allowed;
    }
    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
  .total {
    margin-left: 20px;
  }
}
</style>
