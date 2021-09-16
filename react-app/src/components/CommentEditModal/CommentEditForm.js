import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { delete_comment, update_comment } from "../../store/comment";
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

    const handleDeleteComment = (e) => {
        e.preventDefault()
        const delete_content = async () => {
            await dispatch(delete_comment(commentId))
            await dispatch(get_feed())
        }
        setShowModal(false)
        delete_content()
    }

    return (
        <div className='comment-edit-modal__comment_edit'>
                    <div className='exit-bar__comment_edit'>
                        <i onClick={() => setShowModal(false)} className="fas fa-arrow-left"></i>
                        <h2 className='modal-header__comment_edit'>Update your comment</h2>
                        <i onClick={() => setShowModal(false)} className="far fa-window-close"></i>
                    </div>
                    <div className='container__comment_edit image-post-container__comment_edit'>
                        <div className='caption-share-container__comment_edit'>
                            <div className='share-container-user-info__comment_edit'>
                                <div className='user-profile-thumb__comment_edit' style={
                                    { backgroundImage: `url(${user?.profileImgUrl})` }
                                }></div>
                                <p>{user?.username}</p>
                            </div>
                            <form className='caption-share-form__comment_edit' onSubmit={handleCommentUpdate}>
                                <div className='image-caption-container__comment_edit'>
                                    <textarea
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        className='caption-input__comment_edit'
                                        placeholder='Write a caption...'
                                    ></textarea>
                                </div>
                                <div className='share-button-container__comment_edit'>
                                    <button className='update-button__comment_edit' type='submit'>Update</button>
                                </div>
                                <div className='share-button-container__comment_edit'>
                                    <button className='delete-button__comment_edit' onClick={handleDeleteComment}>Delete</button>
                                </div>
                            </form>
                        </div>
                    </div>
        </div>
    )
}


export default CommentEditForm;
