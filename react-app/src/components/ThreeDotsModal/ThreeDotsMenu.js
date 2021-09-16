import React, { useState } from "react";
import { useSelector } from "react-redux";
import FollowUnfollow from "../FollowUnfollowButton";
import ImageEditModal from "../ImageEditModal";


import './ThreeDotsMenu.css'



const ThreeDotsMenu = ({ setShowModal, imageId }) => {
    const user = useSelector(state => state.session.user)
    const image = useSelector(state => state.feed.images[imageId])
    console.log(image?.userId);

    return (
        <div className='menu-container__three_dots_modal'>
            <h2>Menu</h2>
            {image?.userId === user?.id && (
                <>
                    <ImageEditModal imageId={image?.id}/>
                    <div>Delete</div>
                    <div></div>
                    <div></div>
                </>
            )}
            {(user?.id !== image?.userId && image.userId) && (
                <FollowUnfollow userId={image?.userId}/>
            )}
        </div>
    )

}

export default ThreeDotsMenu;
