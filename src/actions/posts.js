//action names
import {ADD_POST, UPDATE_POSTS , ADD_COMMENT ,UPDATE_POST_LIKES ,UPDATE_COMMENT_LIKES} from './actionTypes'
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
                // console.log(data);
                dispatch(updatePosts(data.data.posts));
            })
            .catch((err)=>{
                console.error(err);
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
                console.error(data.message);
            }
        })
        .catch((err)=>{
            console.error(err);
        });
    }

}

//creating comment
export function createComment (commentContent , postId){

    return function(dispatch){
        const Url = APIUrls.createComment();
        
        fetch(Url , {
            method : "POST" ,
             headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization : `Bearer ${getAuthTokenFromLocalStorage()}`
            },
            body : getFormbody({
                content : commentContent,
                post_id : postId
            })
        })
        .then((res)=> res.json())
        .then((data) => {

            if(data.success){
                dispatch(addComment(data.data.comment , data.data.comment.post));
            }else{
                console.error(data.message);
            }
        })
        .catch((err)=>{
            console.error(err);
        })
    }

}

export function addComment(comment , postId){
    return {
        type : ADD_COMMENT ,
        comment : comment ,
        postId :postId
    }
}

export function addLikeToStore(likeableId , likeType , userId){
    return (dispatch)=>{

        const Url = APIUrls.toggleLike(likeableId , likeType);
        
        fetch(Url , {
            method : "POST" ,
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded',
               Authorization : `Bearer ${getAuthTokenFromLocalStorage()}`
           }
        })
        .then((res)=>res.json())
        .then((data)=>{

            if(data.success){
                if(likeType ===  'Post'){
                    dispatch(togglePostLike(likeableId , userId))
                }else if(likeType  === 'Comment'){
                    dispatch(toggleCommentLike(likeableId , userId))
                }
            }
        })
        .catch((err) => {
            console.error(err);
        })
        

    }
}

//we are seding user id becasue our likes array constest of an array of user_id and the id signfiies that the use has liked the ppost

export function togglePostLike( postId , userId ){
    return {
        type : UPDATE_POST_LIKES,
        postId : postId ,
        userId : userId
    }
}

export function toggleCommentLike( commentId , userId ){
    return {
        type : UPDATE_COMMENT_LIKES,
        commentId : commentId ,
        userId : userId
    }
}