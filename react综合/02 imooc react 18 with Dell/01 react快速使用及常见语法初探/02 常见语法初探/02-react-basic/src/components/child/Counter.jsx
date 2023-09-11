import { useState } from "react";
function Counter({ useColor }) {
  const [count, setCount] = useState(0);
    
  return (
    <div
      style={{ color: useColor ? "red" : "black" }}
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}
    </div>
  );
}

export default Counter;
