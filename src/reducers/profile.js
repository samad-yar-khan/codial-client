import {
    USER_PROFILE_FAILURE,
    USER_PROFILE_SUCCESS,
    FETCH_USER_PROFILE,
    CLEAR_PROFILE_STATE
} from '../actions/actionTypes'

const initialProfileState = {

    inProgress : false,
    error :  null,
    success : null ,
    user : {}

}

export default function profile (state = initialProfileState , action){
    switch (action.type){
        case USER_PROFILE_SUCCESS :
            return{
                ...state ,
                user : action.user,
                error : false,
                inProgress : false
            };
        case USER_PROFILE_FAILURE : 
            return {
                ...state,
                inProgress : false ,
                error : action.error ,
            };
        case FETCH_USER_PROFILE :
            return {
                ...state ,
                inProgress : true
            };
        case CLEAR_PROFILE_STATE :
            return {
                ...state ,
                inProgress : false ,
                user : {},
                error : null,
            
            }
        default :
            return state ;
    }
}