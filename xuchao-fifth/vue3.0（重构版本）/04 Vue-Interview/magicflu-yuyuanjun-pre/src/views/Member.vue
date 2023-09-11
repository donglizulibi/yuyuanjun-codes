<template>
  <div class="main">
    <div class="dropdown-box">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">{{ personName }}</span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="(item, index) of dataList"
              :key="index"
              @click.native="getPersonData(item.id)"
              >{{ item.name }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="calendar-box">
      <el-calendar>
        <template #dateCell="{ data }">
          <div>
            {{ data.day.split("-")[2] }}

            <div class="hasSomeThingTodo" v-if="hasSomeThingTodo(data.day)">
              <p v-for="(item, index) of showTodo(data.day)" :key="index">
                {{ item }}
              </p>
            </div>
          </div>
        </template>
      </el-calendar>
    </div>
  </div>
</template>

<script>
import { fakeData } from "../data/fake";
export default {
  data() {
    return {
      dataList: fakeData,
      personDataList: fakeData[0],
    };
  },

  methods: {
    getPersonData(id) {
      this.personDataList = this.dataList.find((item) => item.id == id);
      //   console.log(this.todoList)
    },
    getTodoList(day) {
      return this.personDataList.todoList.filter((item) => item.date === day);
    },

    hasSomeThingTodo(day) {
      return this.getTodoList(day).length;
    },

    showTodo(day) {
      let item = this.getTodoList(day)[0]["todoItem"];
      return item;
    },
  },

  computed: {
    personName() {
      // console.log(this.personDataList)
      return this.personDataList.name;
    },
  },
  mounted() {
    // console.log(this.dataList);
  },
};
</script>

<style lang="scss">
.el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}

.main {
  .dropdown-box {
    height: 100px;
  }
  .calendar-box {
    margin-top: 10px;
    .el-calendar {
      thead {
        th {
          margin-top: 10px;
          border: 1px solid black;
          height: 40px;
        }
      }
      width: 800px;
      td.is-today {
        background-color: aqua;
      
      }
      td.is-selected {
        background-color: rgba($color: blue, $alpha: 0.2);
        
      }

      td.next,
      td.prev {
        opacity: 0.5;
      }
      .el-calendar-day {
        width: 120px;
        height: 80px;
        border: 1px solid black;
        .hasSomeThingTodo {
          p {
            margin: 0;
            background-color: rgba($color: pink, $alpha: 0.2);
            border-left: 5px solid pink;
            margin-top: 5px;
          }
        }
      }
    }
  }
}
</style>