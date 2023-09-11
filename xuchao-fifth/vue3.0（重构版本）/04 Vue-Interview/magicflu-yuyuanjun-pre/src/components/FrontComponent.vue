<script>
import { h, watch } from "vue";
export default {
  props: {
    day: {
      type: String,
    },
    dateList: {
      type: Array,
    },
  },
  setup(props) {
    const { day, dateList } = props;

    // 定义一个hasIn变量，表示如果为真，才可以添加当日事项的弹窗
    // 避免所有日期都会出现弹窗的现象
    let hasIn = false;

    function createList(day){
        console.log(day)
        console.log(dateList)
        let arr = dateList.find(item=>item.time === day).list
        console.log(arr)
        let renderList = arr.map(item=>h('p', {}, item))

        return renderList
    }


    let classObj = {};
    dateList.forEach((item) => {
      if (item.time === day) {
        // 判断数据中哪个日期中有任务
        classObj.hastate = true;
        hasIn = true;
    
        // 判断这一天的任务是否完成
        item.state === "finish"
          ? (classObj.finish = true)
          : (classObj.unfinish = true);
      }
    });

    if (hasIn) {
      return () =>
        h("div", { class: classObj }, [
          day.split("-")[2],
          h("div", { class: "toolTip" }, createList(day)),
        ]);
    } else {
      return () => h("div", { class: classObj }, day.split("-")[2]);
    }
  },

  mounted() {},
};
</script>

<style lang="scss">
</style>