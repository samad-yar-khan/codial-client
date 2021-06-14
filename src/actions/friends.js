import {
    FETCH_FRIENDS_FAILURE,
    FETCH_FRIENDS_SUCCESS
} from './actionTypes';

import { APIUrls } from '../helper/urls';
import { getAuthTokenFromLocalStorage} from '../helper/utils';


export function fetchUserFriends(){

    return function(dispatch){

        const url = APIUrls.fetchUserFriends();

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
                console.log(data);
                dispatch(fetchFriendSuccess(data.data.friends));
            }else{
                dispatch(fetchFriendFailure(data.message));
            }
        })
        .catch((err) => console.error(err));
    }

}

export function fetchFriendSuccess(friendList)
{
    return {
        type : FETCH_FRIENDS_SUCCESS ,
        friendList : friendList ,
        error : false
    }
}

export function fetchFriendFailure(error)
{
    return {
        type : FETCH_FRIENDS_FAILURE ,
        error : error
    }
}







