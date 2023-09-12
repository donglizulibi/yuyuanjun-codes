import { useState, useReducer } from "react";

// reducer使用流程
// 1. 定义数据
// 2. 定义 Action 发送改变数据的指令
// 3. 拿到 Action 之后, dispatch 方法派发 Action
// 4. 根据指令修改数据
// 5. 完成数据的修改

function TodoListUseReducer() {
  const [inputValue, setInputValue] = useState("");
  
  // useReducer传递两个值, 第一个是reducer, 第二个是初始值
  const [list, dispatch] = useReducer(reducer, []);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleButtonClick() {
    const newList = [
      ...list,
      {
        id: inputValue,
        value: inputValue,
      },
    ];

    setList(newList);
    setInputValue("");
  }

  function handleItemClick(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
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
