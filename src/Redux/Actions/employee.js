import axios from 'axios';
import { BASE_URL } from '../../Utils/url';
import { EMPLOYEES_LIST } from '../types';


export function getEmployeesList(){
    return dispatch => {
        var url = `${BASE_URL}/employees/`
        axios.get(url).then(res=>{
            dispatch({
                type: EMPLOYEES_LIST,
                payload: res.data
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
            console.log(res)
        }).catch(err=>{
            console.log('errors', err.response)
        })
    }
}