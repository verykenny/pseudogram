import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { get_feed } from "../../store/feed";

import ImageUploadModal from "../ImageUploadModals";
import ImageModal from "../ImageModal";

import './Profile.css'
import { get_likes } from "../../store/like";

const Profile = () => {
    const user = useSelector(state => state.session.user);
    const images = useSelector(state => Object.values(state.feed.images))
    const { userId } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            await dispatch(get_feed());
        })();
    }, [dispatch]);

    return (
        <>
            <h1>Profile Page</h1>
            {user.id === Number(userId) && <ImageUploadModal />}
            <ul>
                <li>
                    <strong>User Id</strong> {userId}
                </li>
                <li>
                    <strong>Username</strong> {user.username}
                </li>
                <li>
                    <strong>Email</strong> {user.email}
                </li>
                <div className='images_container__profile'>
                    {images.length > 0 && images.map(image => {
                        if (image.userId === user.id) {
                            return (
                                <ImageModal key={image.id} imageId={image.id} user={user} />
                            )
                        }
                        return '';
                    })}
                </div>
            </ul>
        </>
    )
}


export default Profile;
