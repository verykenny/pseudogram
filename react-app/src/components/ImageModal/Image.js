import React, { useDebugValue, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_comments } from "../../store/comment";

import './Image.css'




const Image = ({ setShowModal, image, user, setImageModalShow }) => {
    const { comments } = useSelector(state => state)
    const dispatch = useDispatch()

    const closeModal = () => {
        if (setShowModal) setShowModal(false);
        if (setImageModalShow) setImageModalShow(false);
        return;
    }


    useEffect(() => {
        dispatch(get_comments())
    }, [dispatch])

    console.log(comments);
    return (

        <>

            <div className='exit-bar__image_upload'>
                <i className="far fa-image"></i>
                <h2 className='modal-header__image_upload'>Post</h2>
                <i onClick={() => closeModal()} className="far fa-window-close"></i>

            </div>
            <div className='image-post-container__image_modal'>
                <div className='display-container__image_modal'>
                    <img className='image__image_modal' src={image.imgUrl} alt='to be uploaded'></img>
                </div>
                <div className='caption-share-container__image_modal'>
                    <div className='share-container-user-info__image_modal'>
                        <div className='user-profile-thumb__image_modal' style={
                            { backgroundImage: `url(${user.profileImgUrl})` }
                        }></div>
                        <p>{user.username}</p>
                        <p>{image.caption}</p>
                    </div>
                    <div className='comments_container__image_modal'>
                        <div className='image-caption-container__image_modal'>
                            {comments.loading && <div>Loading...</div>}
                            {!comments.loading && Object.values(comments?.comments).map(comment => {
                                if (comment.imgId === image.id) {
                                    return <CommentCard comment={comment} />
                                } else {
                                    return ''
                                }
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

        </>
    )


}


export default Image;
