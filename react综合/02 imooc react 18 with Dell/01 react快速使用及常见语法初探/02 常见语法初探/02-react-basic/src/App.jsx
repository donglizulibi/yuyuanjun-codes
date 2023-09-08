import { useState } from "react";
import UseStatePrinciple from "./components/UseStatePrinciple";
import StopPropagation from "./components/StopPropagation";

import "./App.css";

function App() {
  return (
    <>
      <h2>关于快照态数据和batchUpdate的概念</h2>
      <UseStatePrinciple />

      <h2>冒泡与阻止冒泡</h2>
      <StopPropagation />
    </>
  );
}

export default App;
