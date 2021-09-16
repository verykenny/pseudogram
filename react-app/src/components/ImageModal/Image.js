import React, { useDebugValue, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_comments, set_new_comment } from "../../store/comment";
import { get_feed } from "../../store/feed";
import { delete_like, get_likes, set_new_like } from "../../store/like";

import './Image.css'


const Image = ({ setShowModal, imageId, user, setImageModalShow }) => {
    const image = useSelector(state => state.feed.images[imageId])
    const likes = useSelector(state => state.likes)
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()
    const [liked, setLiked] = useState(Object.values(image.likes).some(like => like.userId === user.id))

    const closeModal = () => {
        if (setShowModal) setShowModal(false);
        if (setImageModalShow) setImageModalShow(false);
        return;
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        const update_comment = async () => {
            await dispatch(set_new_comment(comment, image.id))
            await dispatch(get_feed())
        }
        update_comment()
        setComment('')
    }

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
        <div className='image-display-modal-container__image_modal'>
            <div className='image-post-container__image_modal'>
                <div className='display-container__image_modal'>
                    <div className='image__image_modal' style={
                        { backgroundImage: `url(${image?.imgUrl})` }
                    }></div>
                    <p>{image.caption}</p>
                </div>
                <div className='caption-share-container__image_modal'>
                    <div className='share-container-user-info__image_modal'>
                        <div className='user-profile-thumb__image_modal' style={
                            { backgroundImage: `url(${user.profileImgUrl})` }
                        }></div>
                        <p>{user.username}</p>
                    </div>
                    <div className='comments_container__image_modal'>
                        <div className='comment-section__image_modal'>
                            {Object.values(image.comments).map(comment => {
                                return <CommentCard comment={comment} />
                            })}
                        </div>
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
                                    </div>
                                    <div className="users-who-liked__image_modal">
                                        {Object.values(image.likes).length > 0 && (
                                            <p>Liked by {(liked) ? 'you' : 'username'} and {`${(image?.totalLikes) - 1} others`}</p>
                                        )}
                                        {Object.values(image.likes).length === 0 && (
                                            <p>No likes yet</p>
                                        )}
                                    </div>

                                </>
                            )}
                        </div>
                        <div className='comment-button-container__image_modal'>
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className='comment-input__image_modal'
                                placeholder='Leave a comment...'
                            ></textarea>
                            <div className='share-button-container__image_modal'>
                                <button
                                    disabled={(comment.length === 0) ? true : false}
                                    className='comment-button__image_modal'
                                    onClick={handleCommentSubmit}
                                >Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}



const CommentCard = ({ comment }) => {
    return (
        <>
            <div className='comment-card__image_modal'>
                <div className='commenter-profile-thumb__image_modal' style={
                    { backgroundImage: `url(${comment.commenter.profileImgUrl})` }
                }></div>
                <div className='comment__image_modal'>
                    <p><span className='username__image_modal'>{comment.commenter.username}</span> {comment.content}</p>
                </div>
            </div>
        </>
    )


}


export default Image;
