import { useState } from "react";
import { PartOne, PartTwo } from "./Parts";
import PassDataFromChildren from "./PassDataFromChildren";
import PassDataChildren from "./PassDataChildren";
function PassValueBetweenComps() {
  const [showPartOne, setShowPartOne] = useState(true);
  return (
    <>
      <div>
        <h4>两个同级组件间的数据传递</h4>
        <PartOne showPartOne={showPartOne} setShowPartOne={setShowPartOne} />
        <PartTwo showPartOne={showPartOne} setShowPartOne={setShowPartOne} />
      </div>
      <h4>子组件传数据到父组件</h4>
      <PassDataFromChildren />

      <h4>使用Children进行父子间组件传递数据</h4>
      <PassDataChildren />
    </>
  );
}

export default PassValueBetweenComps;
