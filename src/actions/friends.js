import {
    FETCH_FRIENDS_FAILURE,
    FETCH_USER_FRIENDS,
    FETCH_FRIENDS_SUCCESS
} from './actionTypes';

import { APIUrls } from '../helper/urls';
import { getAuthTokenFromLocalStorage} from '../helper/utils';


export function fetchFriends(){

    return function(dispatch){

        const url = APIUrls.fetchUserFriends();

        fetch(url , {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization : `Bearer ${getAuthTokenFromLocalStorage()}`
            }
        })
        .then ((response) => response.json())
        .then ((data) => {
            if(data.success){
                dispatch(fetchFriendSuccess(data.data.friends));
            }else{
                dispatch(fetchFriendFailure(data.message));
            }
        });
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







