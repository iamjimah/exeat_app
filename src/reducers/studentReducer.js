

function studentReducer( state, action ) {
    
    switch (action.type) {
        case "addStudent":
            const {name, level, date, indexNo} = action.payload;
            return[{name, level, date, indexNo},...state];
        case "delete":
            return state.filter((student)=>student.indexNo!==action.indexNo)
        default:
            return state;

    }

  
}

export default studentReducer;
