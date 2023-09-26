import { useState, useEffect } from "react";
// 本例需要 在本文件夹下运行
// json-server --watch --port 3003 --host 127.0.0.1 db.json

// 本例需要关闭严格模式

// 本例来模拟一个场景，一个react组件在刚刚渲染的时候，调用接口来获取初始数据
// 此后就不必再调用这个接口，但是假如组件内部存在useState

// 在调用useState定义的方法改变数据的时候，组件函数会重新执行
// 此时会重新调用接口，这是不能发生的

// 为了避免重新调用接口，react提供了useEffect
// useEffect的使用方法是传入一个回调函数，把调用接口的操作放在回调函数的函数体里

// 但是仅仅这样做，只能保证调用接口在渲染函数之后

// useEffect可以定义第二个参数，参数值是数组
// 这个参数可以限定 Effect 的执行时机、


// 如果是空数组，表示只有在第一次渲染的时候执行


// 填入空数组之后，发送请求的操作只会在组件函数加在之后执行
// 之后调用useState的方法，也不会执行

// 如果在数组中填入变量，比如填入name，则表示只有name变量改变的时候
// 才会执行useEffect里面的操作

function EffectFetch() {
  const [name, setName] = useState("dell");
  const [age, setAge] = useState(28)

  useEffect(() => {
    fetch("http://127.0.0.1:3003/").then(() => {
      console.log("初始操作");
    });
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:3003/").then(() => {
      console.log("name改变后再次触发");
    });
  }, [name]);

  useEffect(() => {
    fetch("http://127.0.0.1:3003/").then(() => {
      console.log("age改变后再次触发");
    });
  }, [age]);

  function handleAgeClick(){
    setAge(20)
  }

  function handleNameClick() {
    setName("lee");
  }
  return (
    <div>
      {name}
      <br />
      <button onClick={handleNameClick}>改变名称，观察发送请求次数</button>
      <br />
      <br />
      {age}
      <br />
      <button onClick={handleAgeClick}>改变数值，观察发送请求次数</button>
    </div>
  );
}

export default EffectFetch;
