import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { update_image } from "../../store/feed";




const ImageEditForm = () => {
    const { imageId } = useParams()
    const image = useSelector(state => state.feed.images[imageId])
    console.log(image);
    const [caption, setCaption] = useState(image.caption)
    const dispatch = useDispatch()

    const handleImagePost = (e) => {
        e.preventDefault()
        dispatch(update_image(imageId, caption))
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
                </>
        </>
    )
}


export default ImageEditForm;
