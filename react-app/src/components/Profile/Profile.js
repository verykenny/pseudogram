import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { get_feed } from "../../store/feed";

import ImageUploadModal from "../ImageUploadModals";

import './Profile.css'

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
            {/* <NavLink to='/image-upload' exact={true} activeClassName='active'>
                Add New Image
            </NavLink> */}
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
                {images.length > 0 && images.map(image => {
                    if (image.userId === user.id) {
                        return (
                            <img className='profile-page-img' src={image.imgUrl} alt={image.caption} />
                        )
                    }
                })}
            </ul>
        </>
    )
}


export default Profile;
