import React, { useState } from "react";
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
    const [file, setFile] = useState(null)
    const [imgUrl, setImgUrl] = useState(null)
    const [imageProvided, setImageProvided] = useState(false)
    const [caption, setCaption] = useState('')
    const dispatch = useDispatch()

    const handleUrlSubmit = (e) => {
        e.preventDefault();
        async function upload() {
            try {
                const data = await uploadFile(file, config)
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

    return (
        <>
            {!imageProvided && (
                <div className='image-upload-container'>
                    <form className='form image-upload-form' onSubmit={handleUrlSubmit}>
                        <div>
                            <input type='file' accept='.png,.jpeg,.jpg,' onChange={(e) => setFile(e.target.files[0])}></input>
                        </div>
                        <div>
                            <button type='submit'>Continue</button>
                        </div>
                    </form>
                </div>
            )}
            {imageProvided && (
                <>
                <div className='image-upload-container'>
                    <img className='uploading' src={imgUrl} alt='to be uploaded'></img>
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
