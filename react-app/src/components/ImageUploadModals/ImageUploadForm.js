import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { set_image } from "../../store/feed";
import { uploadFile } from 'react-s3'

import './ImageUploadForm.css'


const config = {
    bucketName: process.env.REACT_APP_BUCKET,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
}


const ImageUploadForm = ({ setShowModal }) => {
    const user = useSelector(state => state.session.user)
    const [imgUrl, setImgUrl] = useState(null)
    const [imageProvided, setImageProvided] = useState(false)
    const [caption, setCaption] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const imageInput = useRef(null)

    const handleUrlSubmit = (e) => {
        setLoading(true)
        e.preventDefault();
        async function upload() {
            try {
                const data = await uploadFile(e.target.files[0], config)
                setImgUrl(data.location)
                setImageProvided(true)
                setLoading(false)
            } catch (e) {
                return;
            }
        }
        upload()
    }

    const handleImagePost = (e) => {
        e.preventDefault()
        dispatch(set_image(imgUrl, caption))
        setShowModal(false)
    }

    const handleClickSelect = (e) => {
        e.preventDefault()
        imageInput.current.click()
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleImagePost(e)
        }
    }

    return (
        <div className='image-upload-modal__image-upload'>
            {!imageProvided && (
                <>
                    <div className='exit-bar__image_upload'>
                        <i className="far fa-image"></i>
                        <h2 className='modal-header__image_upload'>New Post</h2>
                        <i onClick={() => setShowModal(false)} className="far fa-window-close"></i>
                    </div>
                    <div className='container__image_upload image-select-container__image_upload'>
                        {loading && (
                            <i class="fas fa-circle-notch"></i>
                        )}
                        {!loading && (
                            <i className="fas fa-images"></i>
                        )}
                        <div>
                            <button className='select-button__image_upload' disabled={(loading) ? true : false} onClick={handleClickSelect}>Select an image (PNG, JPG)</button>
                            <input ref={imageInput} style={{ display: 'none' }} type='file' accept='.png,.jpeg,.jpg,' onChange={handleUrlSubmit} />
                        </div>
                    </div>
                </>
            )}
            {!loading && (
                <>
                    {imageProvided && (
                        <>
                            <div className='exit-bar__image_upload'>
                                <i onClick={() => setImageProvided(false)} className="fas fa-arrow-left"></i>
                                <h2 className='modal-header__image_upload'>Add a caption</h2>
                                <i onClick={() => setShowModal(false)} className="far fa-window-close"></i>
                            </div>
                            <div className='container__image_upload image-post-container__image_upload'>
                                <div className='display-container__image_upload'>
                                    <img className='image-to-upload__image_upload' src={imgUrl} alt='to be uploaded'></img>
                                </div>
                                <div className='caption-share-container__image_upload'>
                                    <div className='share-container-user-info__image_upload'>
                                        <div className='user-profile-thumb__image_upload' style={
                                            { backgroundImage: `url(${user?.profileImgUrl})` }
                                        }></div>
                                        <p>{user.username}</p>
                                    </div>
                                    <form className='caption-share-form__image_upload' onSubmit={handleImagePost}>
                                        <div className='image-caption-container__image_upload'>
                                            <textarea
                                                value={caption}
                                                onChange={(e) => setCaption(e.target.value)}
                                                className='caption-input__image_upload'
                                                placeholder='Write a caption...'
                                                onKeyDown={handleKeyDown}
                                            ></textarea>
                                        </div>
                                        <div className='share-button-container__image_upload'>
                                            <button className='share-button__image_upload' type='submit'>Share</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    )
}


export default ImageUploadForm;
