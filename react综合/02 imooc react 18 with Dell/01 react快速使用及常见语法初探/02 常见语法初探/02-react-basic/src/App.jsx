import { useState } from "react";
import UseStatePrinciple from "./components/UseStatePrinciple";
import StopPropagation from "./components/StopPropagation";
import AddArrIndexByImmer from "./components/AddArrIndexByImmer"
import "./App.css";

function App() {
  return (
    <>
      <h2>关于快照态数据和batchUpdate的概念</h2>
      <UseStatePrinciple />

      <h2>冒泡与阻止冒泡</h2>
      <StopPropagation />

      <h2>分别使用useState和useImmer来实现增加数组项目</h2>
      <AddArrIndexByImmer/>
    </>
  );
}

export default App;
