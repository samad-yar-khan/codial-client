
import {
    FETCH_SEARCH_FAILURE ,
    FETCH_SEARCH_RESULT,
    FETCH_SEARCH_SUCCESS
} from './actionTypes'

import { getAuthTokenFromLocalStorage } from '../helper/utils';
import { APIUrls } from '../helper/urls';

export function searchUser(searchText){

    return (dispatch)=>{

        const url = APIUrls.userSearch(searchText);

        fetch(url , {
            method : 'GET' ,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization : `Bearer ${getAuthTokenFromLocalStorage()}`
            }
        })
        .then ((response) => response.json())
        .then ((data) => {
            if(data.success){
                dispatch(searchResultSuccess(data.data.users));
            }else{
                dispatch(searchResultFailure(data.message));
            }
        })
        .catch((err) => console.error(err));

    }

}

export function searchResultSuccess(users){
    return {
        type : FETCH_SEARCH_SUCCESS,
        users : users
    }
}

export function searchResultFailure(err){
    return {
        type : FETCH_SEARCH_FAILURE,
        error : err
    }
}

export function fetchSearchResultStart(){
    return {
        type : FETCH_SEARCH_RESULT,
    }
}
