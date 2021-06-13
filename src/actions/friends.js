import {
    FETCH_FRIENDS_FAILURE,
    FETCH_USER_FRIENDS,
    FETCH_FRIENDS_SUCCESS
} from './actionTypes';

import { APIUrls } from '../helper/urls';
import { getAuthTokenFromLocalStorage} from '../helper/utils';


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
        error : true
    }
}







