import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"

import { uploadFile } from 'react-s3'
import { update_user } from "../../store/session";


import './ProfileEditForm.css'


const config = {
    bucketName: process.env.REACT_APP_BUCKET,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
}


const ProfileEditForm = ({ setShowModal, commentId }) => {
    const user = useSelector(state => state.session.user)
    const [username, setUserName] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [profileImgUrl, setProfileImgUrl] = useState(user.profileImgUrl)
    const dispatch = useDispatch()
    const imageInput = useRef(null)


    const handleUrlSubmit = (e) => {
        e.preventDefault();
        async function upload() {
            try {
                const data = await uploadFile(e.target.files[0], config)
                setProfileImgUrl(data.location)
            } catch (e) {
                return;
            }
        }
        upload()
    }

    const handleUserUpdate = (e) => {
        e.preventDefault()
        dispatch(update_user(username, email, profileImgUrl))
        setShowModal(false)
    }

    const handleClickSelect = (e) => {
        e.preventDefault()
        imageInput.current.click()
    }

    return (
        <div className='comment-edit-modal__comment_edit'>
            <div className='exit-bar__comment_edit'>
                <i onClick={() => setShowModal(false)} className="fas fa-arrow-left"></i>
                <h2 className='modal-header__comment_edit'>Update your profile</h2>
                <i onClick={() => setShowModal(false)} className="far fa-window-close"></i>
            </div>
            <div className='container__comment_edit image-post-container__comment_edit'>
                <form className='caption-share-form__image_upload' onSubmit={handleUserUpdate}>
                    <div>
                        <button className='select-button__image_upload' onClick={handleClickSelect}>Select an image (PNG, JPG)</button>
                        <input ref={imageInput} style={{ display: 'none' }} type='file' accept='.png,.jpeg,.jpg,' onChange={handleUrlSubmit} />
                        <p>Current file: {profileImgUrl.split('/')[3]}</p>
                    </div>
                    <div className='image-caption-container__image_upload'>
                        <input
                            type='text'
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            className='username__image_upload'
                        ></input>
                    </div>
                    <div className='image-caption-container__image_upload'>
                        <input
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='username__image_upload'
                        ></input>
                    </div>
                    <div className='share-button-container__image_upload'>
                        <button className='share-button__image_upload' type='submit'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default ProfileEditForm;
