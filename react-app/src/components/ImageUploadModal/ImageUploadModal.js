import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { get_feed } from "../../store/feed";


const ImageUploadModal = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(get_feed());
    }, [dispatch])


    return (
        <>
            <h1>Image Upload Modal</h1>
        </>
    )
}


export default ImageUploadModal;
