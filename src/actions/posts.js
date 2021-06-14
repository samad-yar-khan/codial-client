//action names
import {UPDATE_POSTS} from './actionTypes'
import {APIUrls} from '../helper/urls'



export function fetchPosts(){
    //this will work becase of thunk
    return(dispatch)=>{
        const url = APIUrls.fetchPosts(1,25);//fethcing post of page one and limit is set to 5

        fetch(url)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                console.log(data);
                dispatch(updatePosts(data.data.posts));
            })
            
            
    }

}

export function updatePosts(posts){

    return{
        type : UPDATE_POSTS ,
        posts
    }

}