import { START_TOAST, STOP_TOAST } from '../types';

const initialState = {
    toast:false,
    toastMsg:''
}

export default (state=initialState, action)=>{
    switch(action.type){
        case START_TOAST:
            return{
                ...state,
                toast: true,
                toastMsg: action.payload
            }
        case STOP_TOAST:
            return{
                ...state,
                toast: false,
                toastMsg: ''
            }
        default:
            return state;
    }
}