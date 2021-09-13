import React, { useState } from "react";
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { update_image, delete_image } from "../../store/feed";




const ImageEditForm = () => {
    const { imageId } = useParams()
    const image = useSelector(state => state.feed.images[imageId])
    const [caption, setCaption] = useState(image?.caption)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleImagePost = (e) => {
        e.preventDefault()
        dispatch(update_image(imageId, caption))
    }

    const handleDeleteImage = (imgId) => {
        dispatch(delete_image(imgId))
        history.push('/home')
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
                        <button type='submit'>Update</button>
                    </div>
                </form>
                <div>
                    <button onClick={() => handleDeleteImage(imageId)} type='submit'>Delete</button>
                </div>
            </>
        </>
    )
}


export default ImageEditForm;
