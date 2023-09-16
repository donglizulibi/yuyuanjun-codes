import { useState, useReducer } from "react";

// reducer使用流程
// 1. 使用useReducer定义数据
// 2. 定义一个 reducer 函数
// 3. 定义 Action 发送改变数据的指令
// 4. 拿到 Action 之后, dispatch 方法派发 Action
// 5. 在Reducer中，根据action的type指令修改数据
// 6. 完成数据的修改，return新数据

// 使用 reducer 的目的，是为了把页面中各个事件和方法中处理数据的逻辑
// 都集中放在 reducer 函数中，便于统一管理

// 在本例中，主要有两个处理数据的方法逻辑
// 第一个是点击提交按钮，点击提交后，输入框的内容会渲染到待办事项列表
// 第二个是点击待办事项列表中的项目之后，会删除该项目

// 首先来看第一个逻辑
// 1. 使用 useReducer 定义数据 list
// 2. 定义一个 reducer 函数 （前面两步都一样）
// 3. 定义 Action 发送改变数据的指令
//    在这里希望点击提交按钮触发 handleButtonClick 事件
//    然后给list数据中添加内容
//    先定义一个action，这个action中有一个type属性，来标识这个动作的action
//    另一个属性是value，表示这个动作中的数据
// 4. 拿到 Action 之后, dispatch 方法派发 Action
//    所以在各个标签绑定的事件中，只需要定义action和使用dispatch派发就可以了
//    而具体的操作数据的逻辑可以统一写在reducer函数中
// 5. 在Reducer中，根据action的type指令修改数据
//    在这里就是往state中添加新的条目
// 6. 完成数据的修改，return新数据

// 定义reducer函数
// reducer函数有两个参数, 第一个是state, 第二个是action
function listReducer(state, action) {
  console.log(action)
  if (action.type === "add") {
    // console.log(state);
    const newState = [
      ...state,
      {
        id: action.value,
        value: action.value,
      },
    ];
    return newState;
  }

  if (action.type === "delete") {
    const newList = [...state];
    newList.splice(action.value, 1);
    return newList;
  }

  return state;
}

function TodoListUseReducer() {
  const [inputValue, setInputValue] = useState("");

  // useReducer传递两个值, 第一个是reducer函数, 第二个是初始值
  // 这个初始值就是redecuer函数中传入state参数的初始值
  const [list, dispatch] = useReducer(listReducer, []);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleButtonClick() {
    const action = {
      type: "add",
      value: inputValue,
    };

    dispatch(action);
    setInputValue("");
  }

  function handleItemClick(index) {
    const action = {
      type: "delete",
      value: index,
    };
    dispatch(action);
  }
  return (
    <div>
      <div>
        <p>{inputValue}</p>
        <input value={inputValue} onChange={handleInputChange} type="text" />
        <button onClick={handleButtonClick}>提交</button>
      </div>
      <ul style={{ listStyle: "none" }}>
        {list.map((item, index) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                handleItemClick(index);
              }}
            >
              {item.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoListUseReducer;
