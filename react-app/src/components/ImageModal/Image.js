import React, { useDebugValue, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_comments } from "../../store/comment";

import './Image.css'


const Image = ({ setShowModal, imageId, user, setImageModalShow }) => {
    const image = useSelector(state => state.feed.images[imageId])

    const closeModal = () => {
        if (setShowModal) setShowModal(false);
        if (setImageModalShow) setImageModalShow(false);
        return;
    }

    return (
        <>

            <div className='exit-bar__image_upload'>
                <i className="far fa-image"></i>
                <h2 className='modal-header__image_upload'>{`${user.username}'s Post`}</h2>
                <i onClick={() => closeModal()} className="far fa-window-close"></i>

            </div>
            <div className='image-post-container__image_modal'>
                <div className='display-container__image_modal'>
                    <img className='image__image_modal' src={image?.imgUrl} alt='to be uploaded'></img>
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
                        <div className='share-button-container__image_modal'>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}



const CommentCard = ({ comment }) => {
    return (
        <>
            <div className='comment-card__image_modal'>
                <div className='user-profile-thumb__image_modal' style={
                    { backgroundImage: `url(${comment.commenter.profileImgUrl})` }
                }></div>
                    <div>
                        <p><span className='username__image_modal'>{comment.commenter.username}</span> {comment.content}</p>
                    </div>
            </div>
        </>
    )


}


export default Image;
