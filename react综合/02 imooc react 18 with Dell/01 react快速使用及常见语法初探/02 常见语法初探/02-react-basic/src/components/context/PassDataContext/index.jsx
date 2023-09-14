import Header from "./Header";
import BodyPart from "./Body";
import nameContext from "../../../../src/nameContext";

// 在这个例子中，有三层组件的关系
// 本组件PassDataContext ->  Body/Header -> Content/Menu

// 如果在本组件中有一个数据要传到Content中，之前的做法是通过属性
// 先传到Body，再传到Content

// 对于多级组件的数据传递，可以使用context，具体步骤为
// 1. 在外部定义一个context文件，这里在src目录下定义nameContext.js
// 2. 在这个文件内，引入createContext方法，定义一个数据，初始值为空字符串，并导出
// 3. 在需要传递数据的源头，也就是最高级别的组件中引入nameContext.js
// 4. 用<nameContext.Provider></nameContext.Provider>把子组件包裹起来
// 5. 在<nameContext.Provider>中调用value属性，属性值就是传递的数据
// 6. 在需要接受数据的后代组件中引入nameContext.js和useContext方法
// 7. 在后代组件中定义变量，调用useContext方法，传入nameContext获得数据
// 8. 数据的传递完成

function PassDataContext() {
  const name = "dell";
  return (
    <div className="pass-data-context">
      <nameContext.Provider value="dell">
        <Header />
        <BodyPart />
      </nameContext.Provider>
    </div>
  );
}

export default PassDataContext;
