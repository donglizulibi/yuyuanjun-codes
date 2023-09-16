// import { useReducer } from "react";
import { useImmerReducer } from "use-immer";
import AddItem from "./AddItem";
import ItemList from "./ItemList";
import DataContext from "./DataContext";
import DispatchContext from "./DispatchContext";

function dataReducer(draft, action) {
  console.log(action);
  if (action.type === "addItem") {
    draft.inputValue = action.value;
    return draft;
  }

  if (action.type === "submit") {
    draft.list = [...draft.list, action.value];
    draft.inputValue = "";
    return draft;
  }

  if (action.type === "delete") {
    draft.list.splice(action.value, 1);
    return draft;
  }
  return draft;
}

function ReducerContextTodolist() {
  const [data, dispatch] = useImmerReducer(dataReducer, {
    inputValue: "",
    list: [],
  });

  return (
    <div>
      <DataContext.Provider value={data}>
        <DispatchContext.Provider value={dispatch}>
          <AddItem />
          <ItemList />
        </DispatchContext.Provider>
      </DataContext.Provider>
    </div>
  );
}

export default ReducerContextTodolist;
