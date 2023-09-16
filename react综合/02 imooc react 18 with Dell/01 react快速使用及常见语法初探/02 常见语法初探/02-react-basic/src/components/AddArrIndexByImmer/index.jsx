import { useState } from "react";
import { useImmer } from "use-immer";

let useStateIndex = 0;
let useImmerIndex = 0;
function AddArrIndexByImmer() {
  const [useStateList, setUseStateList] = useState([]);
  const [useImmerList, setUseImmerList] = useImmer([]);

  const handleClickUseState = () => {   
    // 这里不能使用push改变原数组
    const newList = [...useStateList, useStateIndex];
    setUseStateList(newList);
    useStateIndex++;
  };
  const handleClickUseImmer = () => {
    // 这里出现了 useImmerIndex 自增加两次的现象
    // 因为在react底层在开发阶段会执行两次
    // 可以把main.jsx中的<React.StrictMode>关掉
    // 或者把useImmerIndex换成数组的长度
    setUseImmerList((draft)=>{
        draft.push(useImmerIndex)
        useImmerIndex = useImmerList.length
    })
  };
  return (
    <>
      <div>
        <p>使用useState方法</p>
        <button onClick={handleClickUseState}>增加列表项</button>
        {useStateList.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </div>
      <div>--------------------------</div>
      <div>
        <p>使用useImmer方法</p>
        <button onClick={handleClickUseImmer}>增加列表项</button>
        {useImmerList.map((item) => {
          return <div key={item}>{item}</div>;
        })}
      </div>
    </>
  );
}

export default AddArrIndexByImmer;
