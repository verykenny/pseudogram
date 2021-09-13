import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { get_feed } from "../../store/feed";


const ImageFeed = () => {
    const images = useSelector(state => state.feed)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(get_feed());
    }, [dispatch])


    return (
        <>
            <h1>Image Feed</h1>
        </>
    )
}


export default ImageFeed;
