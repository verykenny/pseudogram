import React from "react";
import { NavLink } from 'react-router-dom';

const Profile = () => {


    return (
        <>
            <h1>Profile Page</h1>
            <NavLink to='/image-upload' exact={true} activeClassName='active'>
                Add New Image
            </NavLink>

        </>
    )
}


export default Profile;
