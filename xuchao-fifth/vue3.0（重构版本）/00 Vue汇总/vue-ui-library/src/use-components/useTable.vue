<template>
  <div>
    <table-edited :data="data" @submit="editData"></table-edited>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { tableData } from "../../data/table/table";
import TableEdited from "../../modules/diy-components/Table/TableEdited.vue";
const data = ref(tableData);

const editData = (state, removeEditInput) => {
  console.log(removeEditInput);
  console.log("useTable submit");
  console.log(state);
  const { index, key, value, text } = state;
  console.log(value);

  console.log(data.value.tBody[index][key]);
  if (data.value.tBody[index][key] !== value) {
    const cfm = window.confirm(`
      您要确定将数据下标为【${index}】项
      【${text}】字段的内容修改为【${value}】吗？
    `);

    if (cfm) {
      console.log(data.value.tBody);
      let tBody = data.value.tBody;
      tBody = tBody.map((item, idx) => {
        if (index === idx) {
          item[key] = value;
        }
        return item;
      });
    } else {
      // console.log(111);
      removeEditInput();
    }
  }
};
</script>

<style lang="scss" scoped></style>
