
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import ImageUploadForm from '../ImageUploadModals/ImageUploadForm';
import LogoutButton from '../auth/LogoutButton';
import { get_likes } from '../../store/like';
import { useDebounce } from '../../hooks/useDebounce'
import Image from '../ImageModal/Image';

import home from './home.png'
import add from './add.png'
import heart from './heart.png'
import blackHeart from './blackHeart.png'
import './navbar.css'

const NavBar = () => {
    const location = useLocation()
    const [showMenu, setShowMenu] = useState(false);
    const [showActivity, setShowActivity] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])
    const [activityFeed, setActivityFeed] = useState([])
    const [filteredSearch, setFilteredSearch] = useState([])
    const [imageModalShow, setImageModalShow] = useState(false)
    const [imgIdForModal, setImgIdForModal] = useState()
    const [userForModal, setUserForModal] = useState()
    const [activityImg, setActivityImg] = useState(heart)
    const user = useSelector(state => state.session.user);
    const activity = useSelector(state => Object.values(state.likes.likes))
    const debouncedSearch = useDebounce(search, 250);
    const dispatch = useDispatch()
    const history = useHistory()



    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };
    const openActivity = () => {
        if (showActivity) {
            sortingLikes()
            return
        };
        sortingLikes()
        setActivityImg(blackHeart)
        setShowActivity(true)
    }
    const openSearchDropdown = () => {
        if (showSearch) return;
        setShowSearch(true)
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
            setActivityImg(heart)
            setShowActivity(false);
        };
        document.addEventListener('click', closeActivity);

        return () => document.removeEventListener("click", closeActivity);
    }, [openActivity]);
    useEffect(() => {
        if (!showSearch) return;

        const closeActivity = () => {
            setShowSearch(false);
        };
        document.addEventListener('click', closeActivity);

        return () => document.removeEventListener("click", closeActivity);
    }, [openSearchDropdown]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/users/');
            const responseData = await response.json();
            setUsers(responseData.users);
        }
        fetchData();
    }, []);

    const searchUsers = (search, id) => {
        let lowerSearch = search.toLowerCase()
        const filteredUsers = users.filter(user => {
            return user.username.toLowerCase().startsWith(lowerSearch) && user.id !== id
        })
        if (search !== '') setFilteredSearch(filteredUsers)
        else setFilteredSearch([])
    }
    let _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (filteredSearch.length !== 0) {
                history.push(`/users/${filteredSearch[0].id}`)
            }
        }
    }

    useEffect(() => {
        if (!user) return;
        searchUsers(search, user.id)
    }, [debouncedSearch])

    useEffect(async () => {
        if (!user) return;
        await dispatch(get_likes(user.id))

    }, [dispatch])


    const sortingLikes = (() => {
        let id = user.id
        let sorted = activity.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date)
        });
        let filtered = sorted.filter(el => el.imgId.userId === id)
        setActivityFeed(filtered)

    })

    const imageModalHandler = (image) => {
        setUserForModal(user)
        setImgIdForModal(image)
        setImageModalShow(true)
    }
    return (

        <nav>
            {location.pathname !== '/login' && location.pathname !== '/sign-up' &&
                <div className='nav-bar'>
                    <div className='inner-nav'>
                        <NavLink to='/home' className='nav-logo'>Pseudogram</NavLink>
                        <div className='search-bar-div'><input
                            className='search-bar'
                            placeholder='Search'
                            value={search}
                            onKeyDown={_handleKeyDown}
                            onChange={(e) => (setSearch(e.target.value), openSearchDropdown())}
                        ></input>
                            {filteredSearch && showSearch && (<ul className='search-dropdown'>
                                {filteredSearch && showSearch && filteredSearch.map(user =>
                                    <li key={`${user.id}`}><NavLink to={`/users/${user?.id}`}><img className='profile-img-nav' src={`${user.profileImgUrl}`}></img></NavLink><NavLink to={`/users/${user?.id}`}>{`${user.username}`}</NavLink></li>
                                )}
                            </ul>)}

                        </div>



                        <div className='right-side-nav'>

                            <NavLink to='/home' exact={true} activeClassName='active'><img className='nav-home-img' src={home}></img></NavLink>




                            <img size='24px' className='nav-add-btn' onClick={() => setShowModal(true)} src={add}></img>
                            {showModal && (
                                <Modal onClose={() => setShowModal(false)}>
                                    <ImageUploadForm setShowModal={setShowModal} />
                                </Modal>
                            )}


                            <img className='activity-nav-img' src={activityImg} onClick={openActivity}></img>
                            {showActivity && (
                                <ul className='activity-dropdown'>
                                    {!activityFeed.length && (
                                        <li>No one has liked any of your photos</li>
                                    )}
                                    {activityFeed.length > 0 && (
                                        <li className='act-likes'>Recent Likes </li>
                                    )}
                                    {activityFeed.length > 0 && activityFeed.map(likes =>
                                        <>
                                            <li><NavLink to={`/users/${likes.user.id}`}> <img className='profile-img-nav' src={`${likes.user.profileImgUrl}`}></img></NavLink><NavLink to={`/users/${likes.user.id}`}> {`${likes.user.username}`}  </NavLink>
                                                <img onClick={(e) => imageModalHandler(likes.imgId.id)} src={`${likes.imgId.imgUrl}`} className='activity-img'></img></li>

                                        </>

                                    )}

                                </ul>

                            )}


                            <img className='profile-img-nav' onClick={openMenu} src={`${user?.profileImgUrl}`} alt="profile-dropdown-button" ></img>

                            {showMenu && (
                                <ul className="nav-profile-dropdown">
                                    <li><NavLink to={`/users/${user?.id}`} exact={true} activeClassName='active'>Profile</NavLink></li>
                                    <li>
                                        <LogoutButton />
                                    </li>
                                </ul>
                            )}
                            {imageModalShow && (
                                <Modal onClose={() => setImageModalShow(false)}>
                                    <Image setImageModalShow={setImageModalShow} user={userForModal} imageId={imgIdForModal} />
                                </Modal>
                            )}


                        </div>
                    </div>
                </div>

            }
        </nav >

    );
}

export default NavBar;
