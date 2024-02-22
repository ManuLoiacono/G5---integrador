import { useContext, useReducer } from "react";
import globalReducer, { initialReducer } from "./GlobalReducer";

const Context = useContext();

function GlobalContext({children}){
    const [state,dispatch] = useReducer(globalReducer,initialReducer)

    return(
        <Context.Provider value={[state,dispatch]}>
            {children}
        </Context.Provider>
    )
}
export {Context};
export default GlobalContext;