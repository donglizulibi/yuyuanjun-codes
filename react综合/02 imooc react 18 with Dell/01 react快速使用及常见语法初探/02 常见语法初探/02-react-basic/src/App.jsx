import { useState } from "react";
import UseStatePrinciple from "./components/UseStatePrinciple";
import StopPropagation from "./components/StopPropagation";
import AddArrIndexByImmer from "./components/AddArrIndexByImmer";
import PassValueBetweenComps from "./components/PassValueBetweenComps";
import DestoryComponent from "./components/DestoryComponent";
import UseOfKey from "./components/UseOfKey"
import UseReducer from "./components/UseReducer";
import UseContext from "./components/UseContext"
import "./App.css";

function App() {
  return (
    <>
      <h2>关于快照态数据和batchUpdate的概念</h2>
      <UseStatePrinciple />

      <h2>冒泡与阻止冒泡</h2>
      <StopPropagation />

      <h2>分别使用useState和useImmer来实现增加数组项目</h2>
      <AddArrIndexByImmer />

      <h2>组件之间的传值</h2>
      <PassValueBetweenComps />

      <h2>组件销毁的条件</h2>
      <DestoryComponent />

      <h2>使用key来销毁组件</h2>
      <UseOfKey />

      <h2>使用reducer</h2>
      <UseReducer />

      <h2>使用Context</h2>
      <UseContext />
    </>
  );
}

export default App;
