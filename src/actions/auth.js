import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_START,
  AUTHENTICATE_USER,
  LOGOUT_USER,
  CLEAR_AUTH_STATE,
} from './actionTypes';

import { APIUrls } from '../helper/urls';

import { getFormbody } from '../helper/utils'; //this helps us conver our paramaters into a proper encoded url

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAIL,
    error: errorMessage,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user: user,
  };
}

//this will send the data to the api and get usr name and password
//as this is callig an api , it will use thunk aswell and we need to call dispath afte rthe api call

export function login(email, password) {
  return function (dispatch) {
    dispatch(startLogin()); //we are doing this to set the inprogress state prop of auth while we check tteh auth
    const url = APIUrls.login();
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormbody({
        email: email,
        password: password,
      }), //this will send us a url encoded string with email and  pasword
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          //save user
          localStorage.setItem('token', data.data.token);
          dispatch(loginSuccess(data.data.user));
          return;
        } else {
          dispatch(loginFailed(data.message));
        }
      });
  };
}

/******* SIGN IN **********/

export function signin(email, password, confirm_password, name) {
  return function (dispatch) {
    dispatch(startSignin()); //we are doing this to set the inprogress state prop of auth while we check tteh auth
    const url = APIUrls.signup();
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormbody({
        email: email,
        password: password,
        confirm_password: confirm_password,
        name: name,
      }), //this will send us a url encoded string with email and  pasword
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          //save user
          localStorage.setItem('token', data.data.token);
          dispatch(signinSuccess(data.data.user));
          return;
        } else {
          dispatch(signinFailed(data.message));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function startSignin() {
  return {
    type: SIGNUP_START,
  };
}

export function signinFailed(errorMessage) {
  return {
    type: SIGNUP_FAIL,
    error: errorMessage,
  };
}

export function signinSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user: user,
  };
}

//FOR LOGGING in a user if a jwt is found

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user : user
  };
}


export function logoutUser (){
    return {
        type:LOGOUT_USER
    }
}

//whener logi fails or register fails , the error val is set in our auth state and we 
//here degine an action to clear that error state upon chaging ppage

export function clearAuthState(){
    return {
        type :CLEAR_AUTH_STATE
    }
}