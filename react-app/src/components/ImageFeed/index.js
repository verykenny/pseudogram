import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { delete_image } from "../../store/feed";

import './ImageFeed.css'


const ImageFeed = () => {
    const feed = useSelector(state => state.feed)
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()

    const handleDeleteImage = (imgId) => {
        dispatch(delete_image(imgId))
    }

    return (
        <>
            <h1>Image Feed</h1>
            {feed.loading === true && <h2>Loading</h2>}
            {feed.images && Object.values(feed.images).map(image => (
                <>
                    <p>{image.caption}</p>
                    <p>{image.userId}</p>
                    <img src={image.imgUrl} alt={image.caption}></img>
                    {user?.id === image.userId && (
                        <>
                        <button onClick={() => handleDeleteImage(image.id)}>Delete Image</button>
                        <NavLink to={`/images/${image.id}`}>edit</NavLink>
                        </>
                    )}
                </>
            ))}
        </>
    )
}


export default ImageFeed;
