import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { get_feed } from "../../store/feed";


const ImageFeed = () => {
    const feed = useSelector(state => state.feed)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(get_feed());
    }, [dispatch])


    return (
        <>
            <h1>Image Feed</h1>
            {feed.loading === true && <h2>Loading</h2>}
            {feed.images && Object.values(feed.images).map(image => (
                <>
                    <p>{image.caption}</p>
                    <p>{image.userId}</p>
                    <img src={image.imgUrl} alt={image.caption}></img>
                </>
            ))}
        </>
    )
}


export default ImageFeed;
