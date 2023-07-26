<template>
  <table border="1" class="my-table">
    <thead>
      <tr>
        <th v-for="info of tHead" :key="info.key">{{ info.text }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) of tBody" :key="item.id">
        <!-- <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.chinese }}</td>
        <td>{{ item.math }}</td>
        <td>{{ item.english }}</td> -->
        <td
          v-for="(value, key) in item"
          :key="key"
          @click="showEditInput($event, key, index)"
        >
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>

  <edit-input></edit-input>
</template>

<script setup>
import { toRefs, ref } from "vue";
import EditInput from "./compoment/EditInput.vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {
        tHead: [],
        tBody: [],
      };
    },
  },
});

const emit = defineEmits(["submit"]);

const showEditInput = (e, key, index) => {
  // document.addEventListener("click", () => {
  //   console.log("document");
  // });
  console.log(e);
  console.log(key);
  console.log(index);
  console.log(123);
};

// const tHead = ref(props.data.tHead);
// const tBody = ref(props.data.tBody);

const { tHead, tBody } = toRefs(props.data);
// console.log(tBody);
</script>

<style lang="scss" scoped>
.my-table {
  border-collapse: collapse;
  width: 100%;
  tr {
    height: 44px;
    td {
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>
