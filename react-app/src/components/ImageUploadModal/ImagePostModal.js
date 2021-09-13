import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
import { get_feed } from "../../store/feed";

const ImagePostModal = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(get_feed());
    }, [dispatch])


    return (
        <>
            <h1>Image Post Modal</h1>
        </>
    )
}


export default ImagePostModal;
