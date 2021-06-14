import React from 'react';
import {FriendListItem} from './index';



const  FriendList = (props) => {
    return (
        <div className="friends-list">
            <div className="header">
                Friends
            </div>

            { (props.friendList && props.friendList.length === 0) && (
                <div className="no-friends">
                    No Friends Found !
                </div>
            )}

            {(props.friendList && props.friendList.length > 0 ) &&
                props.friendList.map((friend , key ) => (
                    <FriendListItem friend={friend.to_user} key ={friend._id} />
                ))
            }
            
        </div>
    );
}

export default FriendList;