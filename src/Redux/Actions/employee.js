import axios from 'axios';
import { BASE_URL } from '../../Utils/url';
import { EMPLOYEES_LIST, EMPLOYEES_EVENT, TOGGLE_EMPLOYEES_EVENT } from '../types';
import { toastStart, toastStop } from './loader';


export function getEmployeesList(){
    return dispatch => {
        var url = `${BASE_URL}/employees/`
        axios.get(url).then(res=>{
            dispatch({
                type: EMPLOYEES_LIST,
                payload: res.data.reverse()
            })
        }).catch(err=>{
            console.log('errors', err.response.data)
        })
    }
}

export function setEmployeesList(data){
    return dispatch => {
        var url = `${BASE_URL}/employees/`
        axios.post(url, data).then(res=>{
            dispatch(toastStart('Successfull added'));
            dispatch({
                type: EMPLOYEES_EVENT,
                payload: true
            })
            setTimeout(() => {
                dispatch(toastStop());
            }, 2000);
        }).catch(err=>{
            console.log('errors', err.response)
        })
    }
}
export function deleteEmployee(id){
    return dispatch => {
        var url = `${BASE_URL}/employees/${id}/`
        axios.delete(url).then(res=>{
            dispatch(toastStart('Successfull Deleted'));
            dispatch({
                type: EMPLOYEES_EVENT,
                payload: true
            })
            setTimeout(() => {
                dispatch(toastStop());
            }, 2000);
        }).catch(err=>{
            console.log('errors', err.response)
        })
    }
}

export function toggleEventEmployee(){
    return dispatch=>{
        dispatch({
            type: TOGGLE_EMPLOYEES_EVENT
        })
    }
}