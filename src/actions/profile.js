import  {
    USER_PROFILE_FAILURE,
    FETCH_USER_PROFILE,
    USER_PROFILE_SUCCESS
} from './actionTypes'

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


//everytime we write an async action , it must return another func wihich ahs dispatch as argument
//thunk
export function fetchUserProfile(userID){
    return function(dispatch){
        dispatchEvent(startUserProfileFetch());
        cons

    }
}