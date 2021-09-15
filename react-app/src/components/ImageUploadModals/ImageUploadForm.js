import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux"
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
    // const [file, setFile] = useState(null)
    const [imgUrl, setImgUrl] = useState(null)
    const [imageProvided, setImageProvided] = useState(false)
    const [caption, setCaption] = useState('')
    const dispatch = useDispatch()
    const imageInput = useRef(null)

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
                            <input ref={imageInput} style={{display:'none'}} type='file' accept='.png,.jpeg,.jpg,' onChange={handleUrlSubmit} />
                        </div>
                </div>
            )}
            {imageProvided && (
                <>
                <div className='image-upload-container image-post-container'>
                    <img className='image-to-upload' src={imgUrl} alt='to be uploaded'></img>
                    <form onSubmit={handleImagePost}>
                        <div>
                            <textarea
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)}
                            ></textarea>
                        </div>
                        <div>
                            <button type='submit'>Post</button>
                        </div>
                    </form>
                </div>
                </>
            )}
        </>
    )
}


export default ImageUploadForm;
