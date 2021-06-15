//Post Action Types
export const UPDATE_POSTS = 'UPDATE_POSTS';

//Login Action Types
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

//SignUP Action Types
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

//For logging in an existing user
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';

//For logout functionalit
export const LOGOUT_USER = 'LOGOUT_USER';

//whener logi fails or register fails , the error val is set in our auth state and we
//here degine an action to clear that error state upon chaging ppage
export const CLEAR_AUTH_STATE = 'CLEAR_AUTH_STATE';

//EDIT USER ACTIONS
export const EDIT_USER_SUCCESSFUL = 'EDIT_USER_SUCCESSFUL';
export const EDIT_USER_FAILURE = 'EDIT_USER_FAILURE';
export const EDIT_USER = 'EDIT_USER';

//USER PROFILE ACTIONS
export const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';
export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS';
export const USER_PROFILE_FAILURE = 'USER_PROFILE_FAILURE';
export const CLEAR_PROFILE_STATE = 'CLEAR_PROFILE_STATE';

//FRIENDS
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCESS';
export const FETCH_FRIENDS_FAILURE= 'FETCH_FRIENDS_FIALURE';
export const FETCH_USER_FRIENDS = 'FETCH_USER_FRIENDS';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';
export const REMOVE_FRIEND_SUCCESS = 'REMOVE_FRIEND_SUCCESS';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';
export const REMOVE_FRIEND_FAILURE= 'REMOVE_FRIEND_FAILURE';

//CREATING DELTING POST
export const ADD_POST = 'ADD_POST';
export const ADD_COMMENT = 'ADD_COMMENT'

//LIKES
export const UPDATE_POST_LIKES = 'UPDATE_POST_LIKES'
export const UPDATE_COMMENT_LIKES = 'UPDATE_COMMENT_LIKES'
