import { useRef } from "react"
import { useState } from "react"

// 在这里需要写一个需求

function SetTimeUseRef(){
    const [time,setTime] = useState((new Date()).getTime())



    return (
        <div>
            <button >start</button>
            <button >stop</button>
            <div>{time}</div>
        </div>
    )
}


export default SetTimeUseRef