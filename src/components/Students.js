import {useContext} from "react"
import { StudentContext } from "../context/StudentContext"

function Students() {

    const {students, dispatch}= useContext(StudentContext)

    return (
        <div>
          {
              students.map((student)=>(
                  <div className="card page">
                  <h2>{student.name}</h2>
                  <h2>{student.level}</h2>
                  <h2>{student.date}</h2>
                  <button className="btn btn-danger" onClick={()=>dispatch({type: "delete", indexNo: student.indexNo})}>
                      X
                  </button>
                  </div>
              ))
          }
        </div>
    )
}

export default Students
