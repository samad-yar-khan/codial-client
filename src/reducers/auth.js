import {
        LOGIN_START, 
        LOGIN_SUCCESS,
        LOGIN_FAIL , 
        SIGNUP_FAIL ,
        SIGNUP_START , 
        SIGNUP_SUCCESS, 
        AUTHENTICATE_USER,
        CLEAR_AUTH_STATE,
        LOGOUT_USER
        } from '../actions/actionTypes';

const initialAuthState = {
  user: {},//this will conatnn the jwt
  error: null,
  isLoggedIn: false,
  inProggress: false, //will be used to diabsle to enable the login buttton while the process of auth is going on
};

export default function auth(state = initialAuthState, action) {

  switch (action.type) {

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        error:null
      }
    case LOGIN_START:
    case SIGNUP_START:
      return {
        ...state,
        inProggress: true,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        inProggress: false,
        user: action.user, //this will contain the jwt
        error:null,
        isLoggedIn:true
      };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
      return {
        ...state,
        inProggress: false,
        error:action.error
      };
    case AUTHENTICATE_USER:
      return{
        ...state,
        user: action.user, //this will contain the jwt
        isLoggedIn:true
      }
    case LOGOUT_USER:
      return{
        ...state,
        user : {},
        isLoggedIn:false
      }


    default:
      return state
    } 

}
