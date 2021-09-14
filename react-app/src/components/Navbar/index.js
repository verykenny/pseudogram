
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import ImageUploadForm from '../ImageUploadModals/ImageUploadForm';
import LogoutButton from '../auth/LogoutButton';
import './navbar.css'

const NavBar = () => {
    const location = useLocation()
    const [showMenu, setShowMenu] = useState(false);
    const [showActivity, setShowActivity] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state.session.user)

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };
    const openActivity = () => {
        if (showActivity) return;
        setShowActivity(true)
    }
    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };
        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    useEffect(() => {
        if (!showActivity) return;

        const closeActivity = () => {
            setShowActivity(false);
        };
        document.addEventListener('click', closeActivity);

        return () => document.removeEventListener("click", closeActivity);
    }, [openActivity]);

    return (
        <div>
            {location.pathname !== '/login' && location.pathname !== '/sign-up' &&
        <nav>
            <ul>
                <li className='nav-logo'><h2>Placeholder</h2></li>
                <li className='search-bar'><input></input></li>
                <li className='home-link'><NavLink to='/home' exact={true} activeClassName='active'>Home</NavLink></li>
                <li >
                    <button className='nav-post-new-img' onClick={() => setShowModal(true)}>Post</button></li>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <ImageUploadForm setShowModal={setShowModal} />
                    </Modal>
                )}



                <div className='activity-dropdown' onClick={openActivity}><button>activity</button>
                    {showActivity && (
                        <ul>
                            <li>placeholders</li>
                            <li>placeholders</li>
                            <li>placeholders</li>
                        </ul>
                    )}


                </div>

                <div className="profile-button-div">
                    <button className="nav-profile-button" onClick={openMenu}><img className='nav-profile-img' src={`${user?.profileImgUrl}`} alt="profile-dropdown-button" height='32px' width='32px'></img></button>
                    {showMenu && (
                        <ul className="nav-profile-dropdown">
                            <li><NavLink to={`/users/${user?.id}`} exact={true} activeClassName='active'>Profile</NavLink></li>
                            <li>Profile settings</li>
                            <li>
                                <LogoutButton />
                            </li>
                        </ul>
                    )
                    }
                </div >
            </ul>
        </nav >
}
        </div>
    );
}

export default NavBar;
