<template>
  <div>
    <table-edited :data="data" @submit="editData"></table-edited>
  </div>
  <br />
  <br />
</template>

<script setup>
import { ref } from "vue";
import { tableData } from "../../data/table/table";
import TableEdited from "../../modules/diy-components/TableCopy/TableEdited.vue";
const data = ref(tableData);

const editData = (state, removeEditInput) => {
  // console.log(removeEditInput);
  // console.log("useTable submit");
  // console.log(state);

  // {key: 'english', value: 22, index: 1, text: '英语'}
  let { index, key, value, text } = state;
  // console.log(value);

  // console.log(data.value.tBody[index][key]);
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
      // console.log(data.value.tBody);
      // console.log(value);
      let tBody = data.value.tBody;

      const v = tBody.filter((item, idx) => {
        if (index === idx) {
          return item;
        }
      })[0][key];

      // console.log(v);

      removeEditInput(v);
    }
  }
};
</script>

<style lang="scss" scoped></style>
