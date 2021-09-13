import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { update_image } from "../../store/feed";

import './ImageUploadForm.css'


const ImageEditForm = () => {
    const { imgId } = useParams()
    const image = useSelector(state => state.feed.images[imgId])

    const [caption, setCaption] = useState('')
    const dispatch = useDispatch()

    const handleImagePost = (e) => {
        e.preventDefault()
        dispatch(update_image(imgId, caption))
    }

    return (
        <>
            <h1>Image Update Form</h1>
                <>
                    <h1>update with info</h1>
                    <img className='updating' src={image?.imgUrl} alt='to be updated'></img>
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
        </>
    )
}


export default ImageEditForm;
