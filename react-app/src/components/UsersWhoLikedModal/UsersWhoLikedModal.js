import React, { useEffect, useState } from 'react';
import './UsersWhoLiked.css'

function UsersWhoLiked(showProp) {
    let newArray = showProp.props.likes
    console.log('new',newArray)

    newArray.forEach(element => {
        console.log(element.user.username)
    })


    return (
        <div className="user-who-liked__liked_modal">
            <div className="users-who-liked-container">
                {newArray.length === 0 &&
                    <div>
                        <div className="top-menu">Likes</div>
                        <div className="users-who-liked-loading">
                        </div>
                    </div>
                }
                {newArray.length !== 0 &&
                    <div>
                        <div className="top-menu">Likes</div>
                        <div className="users-who-liked-loading">
                        </div>
                        {newArray.map(element => (
                            <div className="users-who-liked-loading">
                                <div className="modal-profile-pic" style={
                                    { backgroundImage: `url(${element.user.profileImgUrl})` }
                                }></div>
                                <div className="modal-profile-username">{element.user.username}</div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}
export default UsersWhoLiked
