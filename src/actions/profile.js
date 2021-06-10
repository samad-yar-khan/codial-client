import  {
    USER_PROFILE_FAILURE,
    FETCH_USER_PROFILE,
    USER_PROFILE_SUCCESS,
    CLEAR_PROFILE_STATE
} from './actionTypes'

import {APIUrls} from '../helper/urls'
import {getAuthTokenFromLocalStorage} from '../helper/utils'

export function startUserProfileFetch(){
    return {
        type : FETCH_USER_PROFILE
    }
}

export function UserProfileSuccess(user){
    return {
        type : USER_PROFILE_SUCCESS,
        user : user ,
        error : null
    }
}

export function UserProfileFailure(error){
    return {
        type : USER_PROFILE_FAILURE,
        error : error,
        user : {}
    }
}

export function clearProfileState(){
    return {
        type : CLEAR_PROFILE_STATE
    }
}

//everytime we write an async action , it must return another func wihich ahs dispatch as argument
//thunk
export function fetchUserProfile(userId){
    return function(dispatch){
        dispatch(startUserProfileFetch());
        const url = APIUrls.fetchUser(userId);

        fetch(url , {
            method : 'GET' ,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization : `Bearer ${getAuthTokenFromLocalStorage()}`
            }
        })
        .then((response) => response.json())
        .then((data) => {
            if(data.success){

                dispatch(UserProfileSuccess(data.data.user));


            }else{

                dispatch(UserProfileFailure(data.message));

            }
        })

    }
}