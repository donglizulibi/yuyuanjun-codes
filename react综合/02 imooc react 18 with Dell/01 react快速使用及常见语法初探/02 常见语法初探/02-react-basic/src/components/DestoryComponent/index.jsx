import Counter from "./Counter";
import { useState } from "react";

// UI 节点位置上的内容发生变化时，原始组件会被销毁
// 组件在页面上被销毁，状态会被清空

// 在这个例子中，如果仅仅只是改变一个组件的颜色属性，是不会销毁这个组件的
function DestoryComponent() {
  const [showCom, setShowCom] = useState(true);
  const [useColor, setUseColor] = useState(true);
  return (
    <div>
      <Counter />
      <br />

      <div>
        {showCom ? <Counter /> : null}
        <button
          onClick={() => {
            setShowCom(!showCom);
          }}
        >
          destory component
        </button>
      </div>
      <br />
      <div>
        {useColor ? <Counter useColor={useColor} /> : <Counter />}
        <button
          onClick={() => {
            setUseColor(!useColor);
          }}
        >
          change color
        </button>
      </div>
    </div>
  );
}

export default DestoryComponent;
