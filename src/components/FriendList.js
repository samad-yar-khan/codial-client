import React from 'react';
import {FriendListItem} from './index';



const  FriendList = (props) => {
    return (
        <div className="friend-list">
            <div className="header">
                Friends
            </div>

            { (props.FriendList && props.FriendList.length === 0) && (
                <div className="no-friends">
                    No Friends Found !
                </div>
            )}

            {(props.FriendList && props.FriendList.length > 0 ) &&
                props.FriendList.map((friend , key ) => (
                    <FriendListItem friend={friend.to_user} key ={friend._id} />
                ))
            }
            
        </div>
    );
}

export default FriendList;