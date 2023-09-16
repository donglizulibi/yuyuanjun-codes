import { useContext } from "react";
import DataContext from "./DataContext";
import DispatchContext from "./DispatchContext";

function AddItem() {
  const data = useContext(DataContext);
  const dispatch = useContext(DispatchContext);
  function handleInputChange(e) {
    const aciton = { type: "addItem", value: e.target.value };
    dispatch(aciton);
  }

  function handleClickButton(){
    const action = {type:'submit', value: data.inputValue}
    dispatch(action)
  }
  return (
    <div>
      <input value={data.inputValue} onChange={handleInputChange} />
      <button onClick={handleClickButton}>submit</button>
    </div>
  );
}

export default AddItem;
