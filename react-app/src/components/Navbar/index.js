
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import ImageUploadForm from '../ImageUploadModals/ImageUploadForm';
import LogoutButton from '../auth/LogoutButton';
import { useDebounce } from '../../hooks/useDebounce'
import home from './home.png'
import add from './add.png'
import heart from './heart.png'
import search from './search.png'
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
            {location.pathname !== '/login' && location.pathname !== '/sign-up' &&
                <div className='nav-bar'>
                    <div className='inner-nav'>
                        <h2 className='nav-logo'>Pseudogram</h2>
                        <div className='search-bar-div'><input
                            className='search-bar'
                            value={search}
                            onKeyDown={_handleKeyDown}
                            onChange={(e) => (setSearch(e.target.value), openSearchDropdown())}
                        ></input>
                            <ul className='search-dropdown'>
                                {filteredSearch && showSearch && filteredSearch.map(user =>
                                    <li><NavLink to={`/users/${user?.id}`}><img className='profile-img-nav' src={`${user.profileImgUrl}`}></img>{`${user.username}`}</NavLink></li>

                                )}
                            </ul>

                        </div>



                        <div className='right-side-nav'>

                            <NavLink to='/home' exact={true} activeClassName='active'><img src={home}></img></NavLink>




                            <img size='24px' onClick={() => setShowModal(true)} src={add}></img>
                            {showModal && (
                                <Modal onClose={() => setShowModal(false)}>
                                    <ImageUploadForm setShowModal={setShowModal} />
                                </Modal>
                            )}



                            <img src={heart} onClick={openActivity}></img>
                            {showActivity && (
                                <ul className='activity-dropdown'>
                                    <li>placeholders</li>
                                    <li>placeholders</li>
                                    <li>placeholders</li>
                                    <li>placeholders</li>
                                    <li>placeholders</li>
                                    <li>placeholders</li>
                                    <li>placeholders</li>
                                    <li>placeholders</li>
                                    <li>placeholders</li>
                                    <li>placeholders</li>
                                    <li>placeholders</li>
                                    <li>placeholders</li>
                                </ul>

                            )}



                            <div>
                                <img className='profile-img-nav' onClick={openMenu} src={`${user?.profileImgUrl}`} alt="profile-dropdown-button" ></img>
                                {showMenu && (
                                    <ul className="nav-profile-dropdown">
                                        <li><NavLink to={`/users/${user?.id}`} exact={true} activeClassName='active'>Profile</NavLink></li>
                                        <li><NavLink to={'/'}>Profile settings</NavLink></li>
                                        <li>
                                            <LogoutButton />
                                        </li>
                                    </ul>
                                )}

                            </div>

                        </div>
                    </div>
                </div>

            }
        </nav >

    );
}

export default NavBar;
