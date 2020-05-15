import { EMPLOYEES_LIST, EMPLOYEES_EVENT, TOGGLE_EMPLOYEES_EVENT } from "../types"


const initialState = {
    employees:[],
    isEventEmployee: false
}

export default (state=initialState, action)=>{
    switch(action.type){
        case EMPLOYEES_LIST:
            return{
                ...state,
                employees: action.payload
            }
        case EMPLOYEES_EVENT:
            return{
                ...state,
                isEventEmployee: action.payload
            }
        case TOGGLE_EMPLOYEES_EVENT:
            return{
                ...state,
                isEventEmployee: false
            }
        default:
            return state;
    }
}