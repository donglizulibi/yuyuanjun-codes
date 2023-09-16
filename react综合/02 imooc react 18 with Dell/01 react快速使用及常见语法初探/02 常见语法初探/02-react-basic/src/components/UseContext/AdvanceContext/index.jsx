import { useState } from "react";
import Header from "./Header";
import BodyPart from "./Body";
import nameContext from "./advanceNameContext";

// 在PassDataContext组件中，初始值是的数据传递源头的组件中定义的
// 而在nameContext中定义的是一个空字符串
// 如果要在nameContext中定义初始数据，则可以直接在任意组件传入数据
// 不需要在调用<nameContext.Provider>组件，以及value属性

// 则一个可以应用的业务场景就是，用户未登录时访问网站，显示游客
// 登入以后则显示用户个人信息

// <nameContext.Provider>也可以层级嵌套

function AdvanceContext() {
//   console.log(nameContext);
  const [user, setUser] = useState("Unknow");

  function handleHeaderChange() {
    setUser("dell lee");
  }

  return (
    <div className="pass-data-context">
      <nameContext.Provider value={user}>
        <Header onClick={handleHeaderChange} />
          <BodyPart />
        {/* <nameContext.Provider value="hello world">
        </nameContext.Provider> */}
      </nameContext.Provider>
    </div>
  );
}

export default AdvanceContext;
