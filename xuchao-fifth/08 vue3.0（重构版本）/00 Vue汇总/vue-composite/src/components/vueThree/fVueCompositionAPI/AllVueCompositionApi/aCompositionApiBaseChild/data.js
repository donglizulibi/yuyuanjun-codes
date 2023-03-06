export default {
    compositionData: `import { ref } from "vue";
export default {
  setup() {
    let num = ref(2);
    let add = () => {
      num.value++;
    };
    let desc = () => {
      num.value--;
    };
    return { num, add, desc };
  },
};`,
    optionData: `     export default {
        data() {
          return {
            num: 2,
          };
        },
        methods: {
          add() {
            this.num++;
          },
          desc() {
            this.num--;
          },
        },
      };`
}