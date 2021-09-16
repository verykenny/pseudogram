import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FollowUnfollow from "../FollowUnfollowButton";
import ImageEditModal from "../ImageEditModal";
import { delete_image } from "../../store/feed";


import './ThreeDotsMenu.css'



const ThreeDotsMenu = ({ setShowModal, imageId }) => {
    const user = useSelector(state => state.session.user)
    const image = useSelector(state => state.feed.images[imageId])
    const dispatch = useDispatch()

    const handleDeleteImage = (e) => {
        e.preventDefault()
        dispatch(delete_image(image.id))
    }

    return (
        <div className='menu-container__three_dots_modal'>
            <h2>Menu</h2>
            {image?.userId === user?.id && (
                <>
                    <ImageEditModal imageId={image?.id}/>
                    <div><button onClick={handleDeleteImage}>Delete</button></div>
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
