import { useState } from "react";
import { useImmer } from "use-immer";

// 1 trigger -> render -> commit
// 2 virtual dom: 真实dom的一个js对象表达
// 3 快照态的数据
// 4 batchUpdate

function UseStatePrinciple() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [User1, setUser1] = useState({ age: 18 });
  const [User2, setUser2] = useState({ age: 18 });
  const [admin, setAdmin] = useImmer({ age: 18 });

  const handleClickStateImmer = () => {
    // 在useImmer中，如果想要修改数据，推荐在setAdmin中传入一个回调函数
    // 回调函数中的参数就是修改之前的值

    // useState是react自带的一个hook，而useImmer需要外部安装
    // npm install use-immer --save
    setAdmin((draft) => {
      draft.age += 1;
    });
  };

  const handleClickAgeDirect = () => {
    // 第一种：直接改变原来的对象，无法改变页面显示的数据
    User1.age = 19;
    setUser1(User1);
  };

  const handleClickAgeCopy = () => {
    // 第二种，拷贝一个新的对象，改变新的对象，传递新的对象
    const newUser = { ...User2 };
    newUser.age += 1;

    setUser2(newUser);
  };

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
      <p>直接修改useState定义的数据是不起作用的</p>
      <button onClick={handleClickAgeDirect}>{User1.age}</button>
      <p>复制一个新对象来修改useState定义的数据</p>
      <button onClick={handleClickAgeCopy}>{User2.age}</button>
      <p>使用useImmer代替useState</p>
      <button onClick={handleClickStateImmer}>{admin.age}</button>
    </div>
  );
}

export default UseStatePrinciple;
