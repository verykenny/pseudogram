import React from "react";
import { NavLink } from 'react-router-dom';
import ImageUploadModal from "../ImageUploadModals";

const Profile = () => {


    return (
        <>
            <h1>Profile Page</h1>
            {/* <NavLink to='/image-upload' exact={true} activeClassName='active'>
                Add New Image
            </NavLink> */}
            <ImageUploadModal />

        </>
    )
}


export default Profile;
