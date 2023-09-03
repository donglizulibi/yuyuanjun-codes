import React from "react";

const products = [
  { title: "cabbage", id: 1, type: "vegetable" },
  { title: "garlic", id: 2, type: "vegetable" },
  { title: "apple", id: 3, type: "fruit" },
];

function List() {
  // 不要在组件的内部函数中使用类似于useState这样的hook

  // const res= React.useState(0)
  // const count = res[0]
  // const setCount = res[1]

  // 初始值赋值为0，使用setCount来改变count的值
  const [count, setCount] = React.useState(0);

  const listItems = products.map((product, index) => {
    return (
      <li
        key={product.id}
        style={{
          color: product.type === "fruit" ? "red" : "green",
          cursor: "pointer",
        }}
        onClick={() => {
          // count = count + 1; // 没有用setCount，是无效的
          setCount(count + 1);
          console.log('index: ',index);
        }}
      >
        {product.title}
      </li>
    );
  });
  return (
    <div>
      <p>{count}</p>
      <ul>{listItems}</ul>
    </div>
  );
}

export default List;
