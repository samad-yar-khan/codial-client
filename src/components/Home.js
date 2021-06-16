import React from 'react';

import {PostsList , FriendList , Chat} from './index'
 
 class Home extends React.Component {
     render() {
        const {posts , friends , isLoggedIn} =  this.props;
    

         return (
             <div className='home'>
                <PostsList posts={posts} isLoggedIn={isLoggedIn}/>
                {isLoggedIn && <FriendList friendList={friends.friendList} error={friends.error} success={friends.success} />}
                <Chat />
             </div>
         );
     }
 }
 
 export default Home;