import { useState } from "react";
function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

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

export default TodoList;
