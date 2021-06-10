import  {
    USER_PROFILE_FAILURE,
    FETCH_USER_PROFILE,
    USER_PROFILE_SUCCESS
} from './actionTypes'

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