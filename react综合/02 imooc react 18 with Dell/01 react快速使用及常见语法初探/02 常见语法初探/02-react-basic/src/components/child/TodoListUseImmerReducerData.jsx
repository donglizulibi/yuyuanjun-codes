import { useImmerReducer } from "use-immer";
// 在使用reducer的时候，和使用useState一样
// 修改数据的时候需要需要复制对象或者数组
// 而useImmer则则可以在底层做好这个复制的工作
// 现在引入useImmerReducer，把二者结合起来

// 使用useImmerReducer之后，state就编程了draft
function dataReducer(draft, action) {
  if (action.type === "changeInput") {
    draft.inputValue = action.value;
    return draft;
  }
  if (action.type === "add") {
    draft.list.push({ id: draft.inputValue, value: draft.inputValue });
    draft.inputValue = "";
    return draft;
  }

  if (action.type === "delete") {
    draft.list.splice(action.value, 1);
    return draft;
  }
  return draft;
}

function TodoListUseImmerReducerData() {
  const [data, dispatch] = useImmerReducer(dataReducer, {
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
    // 因为changeInput事件
    // 已经让draft的inputValue和里面的action的value同步了
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

export default TodoListUseImmerReducerData;
