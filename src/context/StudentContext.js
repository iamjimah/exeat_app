import { createContext, useReducer } from "react"
import studentReducer from "../reducers/studentReducer"



export const StudentContext = createContext()


const StudentContextProvider = ({ children }) => {
    const [students, dispatch]= useReducer(studentReducer, [])

    return (
       <StudentContext.Provider value={{students, dispatch}}>
           { children }
       </StudentContext.Provider>
    )
}

export default StudentContextProvider;
