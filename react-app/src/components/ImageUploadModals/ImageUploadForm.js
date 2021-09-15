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
    const dispatch = useDispatch()
    const imageInput = useRef(null)

    console.log(user);

    const handleUrlSubmit = (e) => {
        e.preventDefault();
        async function upload() {
            try {
                const data = await uploadFile(e.target.files[0], config)
                setImgUrl(data.location)
                setImageProvided(true)
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

    const handleClick = (e) => {
        e.preventDefault()
        imageInput.current.click()

    }

    return (
        <>
            <div className='modal-exit-bar'>
                <i onClick={() => setShowModal(false)} className="far fa-window-close"></i>
            </div>
            {!imageProvided && (
                <div className='image-upload-container image-select-container'>
                    <i className="fas fa-images"></i>
                    <div>
                        <button className='image-select-button' onClick={handleClick}>Select an image (PNG, JPG)</button>
                        <input ref={imageInput} style={{ display: 'none' }} type='file' accept='.png,.jpeg,.jpg,' onChange={handleUrlSubmit} />
                    </div>
                </div>
            )}
            {imageProvided && (
                <>
                    <div className='image-upload-container image-post-container'>
                        <div className='image-upload-display-container'>
                            <img className='image-to-upload' src={imgUrl} alt='to be uploaded'></img>
                        </div>
                        <div className='caption-upload-and-share-container'>
                            <div className='share-container-user-info'>
                                <div className='user-profile-thumb' style={
                                        { backgroundImage: `url(${user?.profileImgUrl})` }
                                    }></div>
                                <p>{user.username}</p>
                            </div>
                            <form className='caption-share-image-form' onSubmit={handleImagePost}>
                                <div className='image-caption-container'>
                                    <textarea
                                        value={caption}
                                        onChange={(e) => setCaption(e.target.value)}
                                        className='caption-input'
                                        placeholder='Write a caption...'
                                    ></textarea>
                                </div>
                                <div className='image-share-button-container'>
                                    <button className='image-share-button' type='submit'>Share</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}


export default ImageUploadForm;
