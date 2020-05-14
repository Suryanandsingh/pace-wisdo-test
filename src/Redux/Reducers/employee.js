import { EMPLOYEES_LIST } from "../types"


const initialState = {
    employees:[]
}

export default (state=initialState, action)=>{
    switch(action.type){
        case EMPLOYEES_LIST:
            return{
                ...state,
                employees: action.payload
            }
        default:
            return state;
    }
}