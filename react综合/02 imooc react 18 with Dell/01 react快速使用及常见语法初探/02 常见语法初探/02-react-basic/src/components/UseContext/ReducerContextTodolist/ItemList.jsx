import { useContext } from "react";
import DataContext from "./DataContext";
import DispatchContext from "./DispatchContext";

function ItemList(){
    const dispatch = useContext(DispatchContext)
    const data = useContext(DataContext)

    function handleClickDelete(index){
        const action = {
            type:'delete',
            value:index
        }

        dispatch(action)
    }

    return (
        <ul style={{listStyle:'none'}}>
            {data.list.map((item,index)=>{
                return <li onClick={()=>{handleClickDelete(index)}} key={item}>{item}</li> 
            })}
            
        </ul>
    )
}

export default ItemList