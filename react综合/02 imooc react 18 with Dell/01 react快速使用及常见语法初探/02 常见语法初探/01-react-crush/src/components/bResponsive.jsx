import React from "react";
import ResponsiveChild from "./Child/bResponsiveChild";
function Responsive() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>{count}</p>
      <ResponsiveChild count={count} setCount={setCount}></ResponsiveChild>
      <ResponsiveChild count={count} setCount={setCount}></ResponsiveChild>
    </div>
  );
}

export default Responsive;
