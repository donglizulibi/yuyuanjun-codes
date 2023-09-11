import { useState } from "react";
import { PartOne, PartTwo } from "./child/Parts";
function PassValueBetweenComps() {
  const [showPartOne, setShowPartOne] = useState(true);
  return (
    <div>
      <PartOne showPartOne={showPartOne} setShowPartOne={setShowPartOne}/>
      <PartTwo showPartOne={showPartOne} setShowPartOne={setShowPartOne}/>
    </div>
  );
}

export default PassValueBetweenComps;
