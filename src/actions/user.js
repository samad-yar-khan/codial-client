import {
        EDIT_USER_FAILURE,
        EDIT_USER_SUCCESSFUL
    } from './actionTypes';


import { APIUrls } from '../helper/urls';
import {getFormbody , getAuthTokenFromLocalStorage, setAuthTokenInLocalStorage} from '../helper/utils'

export function editUser(userId , name , password , confirmPassword){
    return (dispatch)=>{

        const url = APIUrls.editUser;
        fetch(url , {
            method : "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization' : `Bearer ${getAuthTokenFromLocalStorage()}`
            },
            body : getFormbody({
                name: name,
                password: password,
                confirm_password: confirm_password,
                id:userId,
            })

        }).
        then((response)=> response.json()).
        then((data) => {
            console.log('data',data);
            if(data.success){
                editUserSuccessful(data.data.user);
                if(data.data.token){
                    setAuthTokenInLocalStorage(data.data.token);
                }
            }else{
                dispatc(editUserFailure(data.message));
            }

            return;
        }).
        catch((err)=> {console.log("ERROR :" ,err)});

    }
}

export function editUserSuccessful(user){
    return {
        type:EDIT_USER_SUCCESSFUL,
        user : user,

    }
}

export function editUserFailure(error){
    return {
        type:EDIT_USER_FAILURE,
        error:error
    }
}