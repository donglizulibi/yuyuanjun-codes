<script>
  import { defineComponent } from 'vue'
  import { ElConfigProvider } from 'element-plus'
  import zhCn from 'element-plus/lib/locale/lang/zh-cn.js'
  import 'dayjs/locale/zh-cn'
  export default defineComponent({
    components: {
      ElConfigProvider,
    },
    setup() {
      return {
        locale: zhCn,
      }
    },
  })

//   export default defineComponent({
//     components: {
//       ElConfigProvider,
//     },
//     setup() {
//       return {
//         locale: zhCn,
//       }
//     },
//   })
</script>

<template>
  <el-config-provider :locale="locale">
    <div class="router-link">
      <router-link to="/">front</router-link>
      <router-link to="member">member</router-link>
      <router-link to="weekTable">weekTable</router-link>
    </div>
    <div class="router-view">
      <router-view />
    </div>
  </el-config-provider>
</template>

<style scoped>
.router-link{
  width: 200px;
  display: flex;
  justify-content: space-between;

}

.router-view{
  width: 100%;
  border-top: 1px solid black;
  padding-top: 10px;
  margin-top: 20px;
  flex: 1;
}
</style>
