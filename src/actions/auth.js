import {LOGIN_START ,
        LOGIN_SUCCESS,
        LOGIN_FAIL   } from './actionTypes'

import {APIUrls} from '../helper/urls'

export function startLogin(){

    return {
        type:LOGIN_START,
    };

}

//this will send the data to the api and get usr name and password
//as this is callig an api , it will use thunk aswell and we need to call dispath afte rthe api call
/
export function login(email,password){

    return function(dipatch){
        const url = APIUrls.login();
        fetch(url ,  {
            method: 'post',
            headers :{
                'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body:{
                
            }
        })

    }


}