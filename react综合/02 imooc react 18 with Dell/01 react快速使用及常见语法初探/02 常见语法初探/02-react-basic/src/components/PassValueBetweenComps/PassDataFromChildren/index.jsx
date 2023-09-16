import { useState } from "react";
import SendDataFromChildren from "./SendDataFromChildren";

function PassDataFromChildren() {
  const [data, setData] = useState("");

  function changeData(params) {
    setData(params)
  }

  return (
    <div>
      <div>这里是父组件的区域：{data}</div>
      <SendDataFromChildren changeData={changeData} />
    </div>
  );
}

export default PassDataFromChildren;
