import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_new_like, delete_like } from "../../store/feed";
import { get_feed } from "../../store/feed";
import ImageModalComment from "./ImageModal_ext";
import { Link } from "react-router-dom";

import './LikeUnlike.css'


const LikeUnlikeComponent = ({ imageId, feedpage = false }) => {
    const user = useSelector(state => state.session.user)
    const image = useSelector(state => state.feed.images[imageId])
    const [liked, setLiked] = useState(Object.values(image.likes).some(like => (like.userId === user.id)))
    const dispatch = useDispatch()

    const handleLiked = (e) => {
        e.preventDefault()
        const update_like = async () => {
            if (!liked) {
                await dispatch(set_new_like(Number(imageId)))
            } else {
                await dispatch(delete_like(Number(imageId)))
            }
            setLiked(value => !value)
            await dispatch(get_feed());
        }
        update_like()
    }

    useEffect(() => {
        setLiked(Object.values(image.likes).some(like => (like.userId === user.id)))
    }, [image, user.id])



    return (
        <div className='like-info__like_component'>
            <>
                <div className="like-button-container__like_component" >

                    {liked && (
                        <i className="fas fa-heart" onClick={handleLiked}></i>
                    )}

                    {!liked && (
                        <i className="far fa-heart" onClick={handleLiked}></i>
                    )}
                    {feedpage && <ImageModalComment imageId={image?.id} user={user} />}

                </div>
                <div className="users-who-liked__like_component">
                    {image?.totalLikes > 0 && (
                        <p>Liked by {(liked) ? 'you' : <Link to={`/users/${image?.likes[0].user.id}`} className="feed-profile__link username__like_component">{image?.likes[0].user.username}</Link>} and {`${(image?.totalLikes) - 1} others`}</p>
                    )}
                    {image?.totalLikes === 0 && (
                        <p>No likes yet</p>
                    )}
                </div>

            </>
        </div>
    )
}

export default LikeUnlikeComponent;
