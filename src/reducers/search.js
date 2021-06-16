import { 
    FETCH_SEARCH_RESULT ,
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_FAILURE
} from "../actions/actionTypes";


const defaultSearchState = {
    users : [] ,
    error : null ,
    inProgress : false
}

export default function search (state = defaultSearchState , action){
    switch (action.type){

        case FETCH_SEARCH_RESULT :
            return{
                ...state ,
                inProgress:true
            }
        case FETCH_SEARCH_SUCCESS:{
            return {
                ...state ,
                inProgress:false,
                users : action.users,
                error : false
            }
        }
        case FETCH_SEARCH_FAILURE :
            return {
                ...state ,
                inProgress:false,
                error : action.error
            }
        default :
            return state; 

    }
}