import {
        EDIT_USER_FAILURE,
        EDIT_USER_SUCCESSFUL
    } from './actionTypes';


import { APIUrls } from '../helper/urls';
import {getFormbody} from '../helper/utils'

export function editUser(userId , userName , password , confirmPassword){
    return (dispatch)=>{

        const url = APIUrls.editUser;
        fetch(url , {
            method : "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },

        })

    }
}

export function editUserSuccessful(user){
    return {
        type:EDIT_USER_SUCCESSFUL,
        user : user,
        
    }
}

export function editUserFailure(error){
    return {
        type:EDIT_USER_FAILURE,
        error:error
    }
}