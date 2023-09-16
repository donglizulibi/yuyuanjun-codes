function SendDataFromChildren({changeData}){
    const childrenData = '这是子组件的数据'
    return (
        <div >
            这是子组件的区域：
            <button onClick={()=>changeData(childrenData)}>点击向父级传递数据</button>
        </div>
    )
}

export default SendDataFromChildren