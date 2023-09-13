import { useReducer } from "react";
import dataReducer from "./reducer/reducer";

// 优势：可以把reducer函数放在外部，可读性高
// 劣势：复用性不如useState


// 在这个例子中，把inputValue也放在useReducer定义
function TodoListUseReducerData() {
  const [data, dispatch] = useReducer(dataReducer, {
    inputValue: "",
    list: [],
  });

  function handleInputChange(e) {
    const action = {
      type: "changeInput",
      value: e.target.value,
    };

    dispatch(action);
  }

  function handleButtonClick() {
    // 在这里可以不传inputValue
    const action = {
      type: "add",
    };

    dispatch(action);
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
        <p>{data.inputValue}</p>
        <input
          value={data.inputValue}
          onChange={handleInputChange}
          type="text"
        />
        <button onClick={handleButtonClick}>提交</button>
      </div>
      <ul style={{ listStyle: "none" }}>
        {data.list.map((item, index) => {
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

export default TodoListUseReducerData;
