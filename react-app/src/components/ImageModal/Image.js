import React from "react";
import { useDispatch } from "react-redux"

import './Image.css'



const ImageUploadForm = ({ setShowModal, image, user }) => {




    return (

        <>
            <div className='exit-bar__image_upload'>
            <i className="far fa-image"></i>
                <h2 className='modal-header__image_upload'>Post</h2>
                <i onClick={() => setShowModal(false)} className="far fa-window-close"></i>
            </div>
            <div className='container__image_upload image-post-container__image_upload'>
                <div className='display-container__image_upload'>
                    <img className='image-to-upload__image_upload' src={image.imgUrl} alt='to be uploaded'></img>
                </div>
                <div className='caption-share-container__image_upload'>
                    <div className='share-container-user-info__image_upload'>
                        <div className='user-profile-thumb__image_upload' style={
                            { backgroundImage: `url(${image.profileImgUrl})` }
                        }></div>
                        <p>{user.username}</p>
                        <p>{image.caption}</p>
                    </div>
                    <form className='caption-share-form__image_upload'>
                        <div className='image-caption-container__image_upload'>
                        </div>
                        <div className='share-button-container__image_upload'>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}


export default ImageUploadForm;
