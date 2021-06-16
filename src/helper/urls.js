//we have this url helper so taht we can have a single place to acces al our apis in the project
//this helps in making the urls dynamic aswell as helps us to manage the api versions

const API_ROOT = 'http://codeial.codingninjas.com:8000/api/v2';


//all the object prooperties of the APIUrls are fuctions and not objects ,
//this is becase we want tha abiliy to have dynamic URLS
//we pass params and  change our urs according to them


export const APIUrls = {
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
  fetchPosts: (page = 1, limit = 10) =>
    `${API_ROOT}/posts?page${page}&limit=${limit}`,
  createPost: () => `${API_ROOT}/posts/create`,
  editUser: () => `${API_ROOT}/users/edit`,
  fetchUser: (userId) => `${API_ROOT}/users/${userId}`,
  fetchUserFriends: () => `${API_ROOT}/friendship/fetch_user_friends`,
  addFriend: (userId) =>
    `${API_ROOT}/friendship/create_friendship?user_id=${userId}`,
  removeFriend: (userId) =>
    `${API_ROOT}/friendship/remove_friendship?user_id=${userId}`,
  createComment: () => `${API_ROOT}/comments`,
  toggleLike: (likeableId, likeableType) =>
    `${API_ROOT}/likes/toggle?likeable_id=${likeableId}&likeable_type=${likeableType}`,
  userSearch: (searchText) => `${API_ROOT}/users/search?text=${searchText}`,
};
