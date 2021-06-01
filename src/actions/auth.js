import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL } from './actionTypes';

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
      body: getFormbody(email, password), //this will send us a url encoded string with email and  pasword
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          //save user
          dispatch(loginSuccess(data.data.user))
          return;
        } else {
          dispatch(loginFailed(data.message));
        }
      });
  };
}
