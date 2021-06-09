//Post Action Types
export const UPDATE_POSTS = "UPDATE_POSTS";

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
export const LOGOUT_USER = 'LOGOUT_USER'

//whener logi fails or register fails , the error val is set in our auth state and we 
//here degine an action to clear that error state upon chaging ppage
export const CLEAR_AUTH_STATE = 'CLEAR_AUTH_STATE';

//EDIT USER ACTIONS
export const EDIT_USER_SUCCESSFUL = 'EDIT_USER_SUCCESSFUL';
export const EDIT_USER_FAILURE = 'EDIT_USER_FAILURE';
export const EDIT_USER = 'EDIT_USER';

