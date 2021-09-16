import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { update_image } from "../../store/feed";

import './ImageEditForm.css'



const ImageEditForm = ({ setShowModal, imageId }) => {
    const user = useSelector(state => state.session.user)
    const image = useSelector(state => state.feed.images[imageId])
    const [caption, setCaption] = useState(image.caption)
    const dispatch = useDispatch()


    const handleImagePost = (e) => {
        e.preventDefault()
        dispatch(update_image(image.id, caption))
        setShowModal(false)
    }

    return (
        <div className='image-edit-modal__image_edit'>
                    <div className='exit-bar__image_edit'>
                        <i onClick={() => setShowModal(false)} className="fas fa-arrow-left"></i>
                        <h2 className='modal-header__image_edit'>Update your caption</h2>
                        <i onClick={() => setShowModal(false)} className="far fa-window-close"></i>
                    </div>
                    <div className='container__image_edit image-post-container__image_edit'>
                        <div className='display-container__image_edit'>
                            <img className='image-to-upload__image_edit' src={image?.imgUrl} alt='to be edited'></img>
                        </div>
                        <div className='caption-share-container__image_edit'>
                            <div className='share-container-user-info__image_edit'>
                                <div className='user-profile-thumb__image_edit' style={
                                    { backgroundImage: `url(${user?.profileImgUrl})` }
                                }></div>
                                <p>{user?.username}</p>
                            </div>
                            <form className='caption-share-form__image_edit' onSubmit={handleImagePost}>
                                <div className='image-caption-container__image_edit'>
                                    <textarea
                                        value={caption}
                                        onChange={(e) => setCaption(e.target.value)}
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


export default ImageEditForm;
