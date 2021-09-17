import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_feed } from "../../store/feed";
import { delete_like, set_new_like } from "../../store/like";
import ImageModalComment from "./ImageModal_ext";


const LikeUnlikeComponent = ({imageId, feedpage=false}) => {
    const user = useSelector(state => state.session.user)
    const image = useSelector(state => state.feed.images[imageId])
    const likes = useSelector(state => state.likes)
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
            setLiked(prev => !prev)

            await dispatch(get_feed())
        }
        update_like()
    }

    return (
        <div className='like-info__image_modal'>
        {!likes.loading && (
            <>
                <div className="like-button-container__image_modal" >

                    {liked && (
                        <i className="fas fa-heart" onClick={handleLiked}></i>
                    )}

                    {!liked && (
                        <i className="far fa-heart" onClick={handleLiked}></i>
                    )}
                    {feedpage && <ImageModalComment imageId={image?.id} user={user}/>}

                </div>
                <div className="users-who-liked__image_modal">
                    {image?.totalLikes > 0 && (
                        <p>Liked by {(liked) ? 'you' : 'username'} and {`${(image?.totalLikes) - 1} others`}</p>
                    )}
                    {image?.totalLikes === 0 && (
                        <p>No likes yet</p>
                    )}
                </div>

            </>
        )}
    </div>
    )
}


export default LikeUnlikeComponent;
