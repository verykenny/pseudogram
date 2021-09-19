import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_new_comment } from "../../store/comment";
import { get_feed } from "../../store/feed";
import CommentEditModal from "../CommentEditModal";
import LikeUnlikeComponent from "../LikeUnlikeComponent";
import ThreeDotsModal from "../ThreeDotsModal";
import { Link } from "react-router-dom";

import './Image.css'


const Image = ({ setShowModal, imageId, user, setImageModalShow }) => {
    const image = useSelector(state => state.feed.images[imageId])
    const [comment, setComment] = useState('')
    const dispatch = useDispatch()

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

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommentSubmit(e)
        }
    }


    return (
        <div className='image-display-modal-container__image_modal'>
            <div className='exit-bar__image_upload'>
                <ThreeDotsModal imageId={image?.id} />
                <h2 className='modal-header__image_upload'>Post</h2>
                <i onClick={() => closeModal()} className="far fa-window-close"></i>
            </div>
            <div className='image-post-container__image_modal'>
                <div className='display-container__image_modal'>
                    <div className='image__image_modal' style={
                        { backgroundImage: `url(${image?.imgUrl})` }
                    }></div>
                    <p>{image?.caption}</p>
                </div>
                <div className='caption-share-container__image_modal'>
                    <div className='share-container-user-info__image_modal'>
                        <Link to={`users/${image?.userId}`} className="feed-profile__link"><div className='user-profile-thumb__image_modal' style={
                            { backgroundImage: `url(${image?.user.profileImgUrl})` }
                        }></div></Link>
                        <Link to={`users/${image?.userId}`} className="feed-profile__link">{image?.user.username}</Link>
                    </div>
                    <div className='comments_container__image_modal'>
                        <div className='comment-section__image_modal'>
                            {Object.values(image?.comments).map(comment => {
                                return <CommentCard key={comment.id} comment={comment} />
                            })}
                        </div>
                        <LikeUnlikeComponent imageId={imageId} />
                        <div className='comment-button-container__image_modal'>
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className='comment-input__image_modal'
                                placeholder='Leave a comment...'
                                onKeyDown={handleKeyDown}
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
    const user = useSelector(state => state.session.user)
    return (
        <>
            <div className='comment-card__image_modal'>
                <Link to={`/users/${comment.commenter.id}`} className="feed-profile__link">
                    <div className='commenter-profile-thumb__image_modal' style={
                        { backgroundImage: `url(${comment.commenter.profileImgUrl})` }
                    }></div>
                </Link>
                <div className='comment__image_modal'>
                    <p><span className='username__image_modal'><Link to={`/users/${comment.commenter.id}`} className="feed-profile__link">{comment.commenter.username}</Link></span> {comment.content}</p>
                    {comment.userId === user.id && (
                        <CommentEditModal commentId={comment.id} />
                    )}
                </div>
            </div>
        </>
    )
}


export default Image;
