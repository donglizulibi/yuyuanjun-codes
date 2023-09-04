import React from "react";

function ResponsiveChild(obj) {
  //   console.log(count, setCount);

  console.log(obj);
  let { count, setCount } = obj;

  return (
    <div>
      <button
        style={{ marginTop: "10px" }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        改变count的值
      </button>
    </div>
  );
}

export default ResponsiveChild;
