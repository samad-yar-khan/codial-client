//we have this url helper so taht we can have a single place to acces al our apis in the project 
//this helps in making the urls dynamic aswell as helps us to manage the api versions 

const API_ROOT = 'http://codeial.codingninjas.com:8000/api/v2';

export const APIUrls = {

    login : ()=> `${API_ROOT}/users/login`,
    sign : ()=> `${API_ROOT}/users/signup`,
    fetchPosts : (page =1 , limit = 5) => `${API_ROOT}/posts?page${page}&limit=${limit}`

};