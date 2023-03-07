export default {
    compositionData: `  setup() {
    ...
    watch(num, (v, w) => {
      if (v < 0) num.value = 0;
    });

    const stop = watchEffect(() => {
      if (num.value > 5) 
        num.value = 5;
    });
    // stop()
    return ...;
  },
};`,
    optionData: `watch: {
    num(v, w){
      if(v > 5){
        this.num = 5
      }else if(v < 0){
        this.num = 0
      }
    }
  };
  `
}