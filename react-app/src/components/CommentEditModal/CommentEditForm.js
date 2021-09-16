import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { update_comment } from "../../store/comment";
import { get_feed } from "../../store/feed";


import './CommentEditForm.css'



const CommentEditForm = ({ setShowModal, commentId }) => {
    const user = useSelector(state => state.session.user)
    const comment = useSelector(state => state.comments.comments[commentId])
    const [content, setContent] = useState(comment.content)
    const dispatch = useDispatch()


    const handleCommentUpdate = (e) => {
        e.preventDefault()
        const new_content = async () => {
            await dispatch(update_comment(content, commentId))
            await dispatch(get_feed())
        }
        setShowModal(false)
        new_content()
    }

    return (
        <div className='image-edit-modal__image_edit'>
                    <div className='exit-bar__image_edit'>
                        <i onClick={() => setShowModal(false)} className="fas fa-arrow-left"></i>
                        <h2 className='modal-header__image_edit'>Update your comment</h2>
                        <i onClick={() => setShowModal(false)} className="far fa-window-close"></i>
                    </div>
                    <div className='container__image_edit image-post-container__image_edit'>
                        {/* <div className='display-container__image_edit'>
                            <img className='image-to-upload__image_edit' src={image?.imgUrl} alt='to be edited'></img>
                        </div> */}
                        <div className='caption-share-container__image_edit'>
                            <div className='share-container-user-info__image_edit'>
                                <div className='user-profile-thumb__image_edit' style={
                                    { backgroundImage: `url(${user?.profileImgUrl})` }
                                }></div>
                                <p>{user?.username}</p>
                            </div>
                            <form className='caption-share-form__image_edit' onSubmit={handleCommentUpdate}>
                                <div className='image-caption-container__image_edit'>
                                    <textarea
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        className='caption-input__image_edit'
                                        placeholder='Write a caption...'
                                    ></textarea>
                                </div>
                                <div className='share-button-container__image_edit'>
                                    <button className='share-button__image_edit' type='submit'>Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
        </div>
    )
}


export default CommentEditForm;
