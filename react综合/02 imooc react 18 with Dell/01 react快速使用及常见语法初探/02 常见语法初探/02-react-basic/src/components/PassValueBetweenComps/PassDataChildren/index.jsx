import GetDataChildren from "./GetDataChildren"

// 前面讲到了两种从父组件传递数据到子组件的方法
// 一种是父组件调用子组件的时候，定义props属性，在子组件上接受属性
// 第二种是定义context

// 这里讲到第三种，在父组件调用子组件的时候使用双标签
// 在标签内部放入要传入的元素(jsx)，在子组件中使用解构方法，通过children拿到元素


function PassDataChildren(){
    
    return (
        <div>
            <GetDataChildren>
                <div>父组件元素</div>
            </GetDataChildren>
        </div>
    )
}

export default PassDataChildren