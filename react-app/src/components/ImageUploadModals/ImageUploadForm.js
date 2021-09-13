import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { set_image } from "../../store/feed";

import './ImageUploadForm.css'


const ImageUploadForm = () => {
    const [imgUrl, setImgUrl] = useState('')
    const [imageProvided, setImageProvided] = useState(false)
    const [caption, setCaption] = useState('')
    const dispatch = useDispatch()

    const handleUrlSubmit = (e) => {
        e.preventDefault()
        setImageProvided(true)
    }

    const handleImagePost = (e) => {
        e.preventDefault()
        dispatch(set_image(imgUrl, caption))
    }

    return (
        <>
            <h1>Image Upload Modal</h1>
            {!imageProvided && (
                <form onSubmit={handleUrlSubmit}>
                    <div>
                        <input
                            type='text'
                            value={imgUrl}
                            onChange={(e) => setImgUrl(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            )}
            {imageProvided && (
                <>
                    <h1>update with info</h1>
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
                </>
            )}
        </>
    )
}


export default ImageUploadForm;
