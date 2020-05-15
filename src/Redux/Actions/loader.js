import { START_TOAST, STOP_TOAST } from "../types"


export function toastStart(msg){
    return dispatch=>{
        dispatch({
            type: START_TOAST,
            payload: msg
        })
    }
}
export function toastStop(){
    return dispatch=>{
        dispatch({
            type: STOP_TOAST
        })
    }
}