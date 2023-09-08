import { useState } from "react";

// 1 trigger -> render -> commit
// 2 virtual dom: 真实dom的一个js对象表达
// 3 快照态的数据
// 4 batchUpdate

function UseStatePrinciple() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = () => {
    // 如果只是写语句，则react则会把count当作一个快照态数据
    // 所谓快照态数据就是使用useState初始定义时的数据
    // 所以这三个操作中的count1都是初始定义的值
    setCount1(count1 + 1);
    setCount1(count1 + 1);
    setCount1(count1 + 1);
  };
  const handleClick2 = () => {
    // 如果给setCount中传入函数，则会绕过batchUpdate方法
    // 函数中有return值，前一个return值会成为后一个函数的参数
    setCount2((count2) => count2 + 1);
    setCount2((count2) => count2 + 1);
    setCount2((count2) => count2 + 1);
  };
  return (
    <div>
      <p>setCount里面直接写语句，调用三次，只增加一次</p>
      <button onClick={handleClick1}>{count1}</button>
      <p>setCount里面传入一个函数，调用三次，增加三次</p>
      <button onClick={handleClick2}>{count2}</button>
    </div>
  );
}

export default UseStatePrinciple;
