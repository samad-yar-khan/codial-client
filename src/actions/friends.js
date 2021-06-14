import {
    FETCH_FRIENDS_FAILURE,
    FETCH_FRIENDS_SUCCESS,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILURE,
    REMOVE_FRIEND_FAILURE,
    REMOVE_FRIEND_SUCCESS
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

// export function addFriend(userId){
//     return function(dispatch){

//         const url = APIUrls.addFriend(userId);

//         fetch(url , {
//             method : "POST",
//             headers : {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//                 Authorization : `Bearer ${getAuthTokenFromLocalStorage()}`
//             }
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             if(data.success){
//                 dispatch(addFriendSuccess(data.data.friendship.to_user));

//             }else{
//                 dispatch(removeFriendSuccess(data.message));
//             }
//         })

//     }
// }

export function addFriendSuccess(friendship){
    return {
        type : ADD_FRIEND_SUCCESS,
        friendship : friendship
    }
}

export function removeFriendSuccess(friend){
    return {
        type : REMOVE_FRIEND_SUCCESS,
        friend : friend
    }
}

export function addFriendFailure(error){
    return {
        type : ADD_FRIEND_FAILURE,
        error : error
    }
}

export function removeFriendFailure(error){
    return {
        type : REMOVE_FRIEND_FAILURE,
        error : error    
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







