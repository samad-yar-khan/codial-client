//action names
import {ADD_POST, UPDATE_POSTS , ADD_COMMENT} from './actionTypes'
import {APIUrls} from '../helper/urls'
import  {getAuthTokenFromLocalStorage ,getFormbody} from '../helper/utils'



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

//this will be used once the api has added our post successfully
export function  addPost(post){
    return {
        type : ADD_POST,
        post : post
    }
}

export function createPost(content){

    return function(dispatch){
        const Url = APIUrls.createPost();
        
        fetch(Url , {
            method : "POST" ,
             headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization : `Bearer ${getAuthTokenFromLocalStorage()}`
            },
            body : getFormbody({
                content : content
            })
        })
        .then((response) => response.json())
        .then((data)=>{
            if(data.success){
                dispatch(addPost(data.data.post));
            }else{
                console.log(data.message);
            }
        })
        .catch((err)=>{
            console.error(err);
        });
    }

}

export function addComment(comment , postId){
    return {
        type : ADD_COMMENT ,
        comment : comment ,
        postId :postId
    }
}