import React from 'react';
import {Link} from 'react-router-dom'

function FriendListItem(props) {
    return (
    <Link className="friends-item" to={`user/${props.friend._id}`}>
            <div className="friends-img">
                <img 
                    src={"https://image.flaticon.com/icons/png/512/1946/1946429.png"}
                    alt={"USER"}
                />
            </div>
            <div className="friends-name">
                {props.friend.name}
            </div>
        </Link>
    );
}

export default FriendListItem;