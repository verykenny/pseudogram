import React from "react";
import { useSelector} from "react-redux";
import { useParams } from 'react-router-dom';

import ImageUploadModal from "../ImageUploadModals";

const Profile = () => {
    const user = useSelector(state => state.session.user);
    const { userId } = useParams();


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
            </ul>
        </>
    )
}


export default Profile;
