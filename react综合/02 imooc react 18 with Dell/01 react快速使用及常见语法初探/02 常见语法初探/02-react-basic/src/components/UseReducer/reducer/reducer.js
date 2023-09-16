// 这里的state初始值是{ inputValue:"", list:[] }
function dataReducer(state, action) {
    if (action.type === "changeInput") {
      const newState = { ...state };
      newState.inputValue = action.value;
      return newState;
    }
    if (action.type === "add") {
      const newState = { ...state };
      newState.inputValue = "";
      newState.list = [
        ...newState.list,
        { id: state.inputValue, value: state.inputValue },
      ];
  
      return newState;
    }
  
    if (action.type === "delete") {
      const newState = { ...state };
      newState.list = [...newState.list]
      
      // 这里会执行两次，所以把newState的list再复制一遍
      // 或者在main.js中取消严格模式
      newState.list.splice(action.value, 1);
      return newState;
    }
    return state;
  }

  export default dataReducer