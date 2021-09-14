
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import ImageUploadForm from '../ImageUploadModals/ImageUploadForm';
import LogoutButton from '../auth/LogoutButton';
import { useDebounce } from '../../hooks/useDebounce'
import './navbar.css'

const NavBar = () => {
    const location = useLocation()
    const [showMenu, setShowMenu] = useState(false);
    const [showActivity, setShowActivity] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state.session.user);
    const [search, setSearch] = useState('')
    const [users, setUsers] = useState([])
    const [filteredSearch, setFilteredSearch] = useState([])
    const debouncedSearch = useDebounce(search, 250);
    const history = useHistory()

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };
    const openActivity = () => {
        if (showActivity) return;
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

    const searchUsers = (search) => {
        let lowerSearch = search.toLowerCase()
        const filteredUsers = users.filter(user => {
            return user.username.toLowerCase().startsWith(lowerSearch)
        })
        if (search !== '') setFilteredSearch(filteredUsers.slice(0, 5))
        else setFilteredSearch([])
    }
    let _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (filteredSearch.length !== 0) {
                console.log(filteredSearch)
                history.push(`/users/${filteredSearch[0].id}`)
            }
        }
    }
    useEffect(() => {
        searchUsers(search)
    }, [debouncedSearch])

    return (

        <nav>
            {location.pathname !== '/login' &&
                <div className='nav-bar'>
                    <div className='inner-nav'>
                        <h2 className='nav-logo'>Pseudogram</h2>
                        <div className='search-bar-div'><input
                            className='search-bar'
                            value={search}
                            onKeyDown={_handleKeyDown}
                            onChange={(e) => (setSearch(e.target.value), openSearchDropdown())}
                        ></input>
                            {filteredSearch && showSearch && filteredSearch.map(user =>
                                <ul>
                                    <li><NavLink to={`/users/${user?.id}`}>{`${user.username}`}</NavLink></li>
                                </ul>

                            )}

                        </div>




                        <div className='home-link'>
                            <NavLink to='/home' exact={true} activeClassName='active'>Home</NavLink>
                        </div>



                        <button className='nav-post-new-img' onClick={() => setShowModal(true)}>Post</button></div>
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

                    </div>
                </div>

            }
        </nav >

    );
}

export default NavBar;
