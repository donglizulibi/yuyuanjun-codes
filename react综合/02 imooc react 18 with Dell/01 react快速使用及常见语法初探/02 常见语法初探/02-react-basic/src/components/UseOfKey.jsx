import { useState } from "react";
import Email from "./child/Email";

// UI 节点位置上的内容发生变化时，原始组件会被销毁
// 组件在页面上被销毁，状态会被清空

// 在本例中, 需要实现点击按钮, 改变to后面的名称, 并清空input里面的内容
// 一种方法是点击之后, 把Email组件换成包含Email组件的div标签
// 在同一个节点位置上的标签元素发生变化, 原来的Email组件会被销毁, 数据也就清空了


// 另一种方法是给Email组件加上key属性, 当存在key值的时候
// 不管节点位置的内容是否变化, 只要key发生了变化, 原始组件就会被销毁
// 这个key变化的优先级, 是高于内容变化的优先级的


// 另外在循环渲染的时候, 也要设置
function UseOfKey() {
  const [toOne, setToOne] = useState("dell");
  const [toTwo, setToTwo] = useState("dell");
  return (
    <div>
      <div>
        {toOne === "dell" ? (
          <Email to={toOne} />
        ) : (
          <div>
            <Email to={toOne} />
          </div>
        )}

        <button
          onClick={() => {
            setToOne("lee");
          }}
        >
          button
        </button>
      </div>
      <div>
        <Email to={toTwo} key={toTwo} />
        <button
          onClick={() => {
            setToTwo("lee");
          }}
        >
          button
        </button>
      </div>
    </div>
  );
}

export default UseOfKey;
