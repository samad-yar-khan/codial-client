import {
        EDIT_USER_FAILURE,
        EDIT_USER_SUCCESSFUL
    } from './actionTypes';


import { APIUrls } from '../helper/urls';
import {getFormbody , getAuthTokenFromLocalStorage, setAuthTokenInLocalStorage} from '../helper/utils'


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