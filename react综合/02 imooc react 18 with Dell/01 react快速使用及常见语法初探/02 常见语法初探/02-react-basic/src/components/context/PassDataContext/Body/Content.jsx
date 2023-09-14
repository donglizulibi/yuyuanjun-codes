import { useContext } from "react"
import nameContext from "../../../../../src/nameContext"

function Content(){
    const name = useContext(nameContext)

    return (
        <div className="content-context">
            Content: {name}
        </div>
    )
}

export default Content