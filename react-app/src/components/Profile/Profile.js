import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { get_feed } from "../../store/feed";
import { get_followings } from '../../store/following'

import ImageUploadModal from "../ImageUploadModals";
import ImageModal from "../ImageModal";
import FollowModal from '../FollowModal'
import { Modal } from "../../context/Modal";
import ProfileCommentModal from "../ProfileCommentModal";
import FollowUnfollow from "../FollowUnfollowButton";

import './Profile.css'
import { get_followers } from "../../store/follower";
import { get_comments } from "../../store/comment";
import ProfileEditModal from "../ProfileEditModal";


const Profile = () => {
    const { userId } = useParams();
    const user = useSelector(state => state.session.user);
    const images = useSelector(state => Object.values(state.feed.images).filter(img => img.userId === +userId))
    const followers = useSelector(state => Object.values(state.followers.users))
    const following = useSelector(state => Object.values(state.following.users))
    const comments = useSelector(state => Object.values(state.comments.comments).filter(el => el.userId === +userId))
    const [showModal, setShowModal] = useState(false)
    const [showCommentModal, setShowCommentModal] = useState(false)
    const [userProfile, setUserProfile] = useState([])
    const [users, setUsers] = useState([])
    const [props, setProps] = useState([])
    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        (async () => {
            await dispatch(get_feed());
            await dispatch(get_comments())
            await dispatch(get_followers(userId))
            await dispatch(get_followings(userId))
        })();
    }, [dispatch]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/users/');
            const responseData = await response.json();
            setUsers(responseData.users);
        }
        fetchData();
    }, []);
    useEffect(() => {
        let filtered = users.filter(el => el.id === +userId)
        setUserProfile(filtered[0])

    }, [users, userId])

    const handleModal = (profileFriends, title) => {
        setProps(profileFriends)
        setTitle(title)
        setShowModal(true)
    }
    const commentModal = (comment, title) => {
        setProps(comment)
        setTitle(title)
        setShowCommentModal(true)

    }



    return (
        <div className='profile-container'>
            <ProfileEditModal />
            <div className='user-profile-info'>
                <div className='top-profile-info'>

                    <img className='profile-img-pfp' src={`${userProfile?.profileImgUrl}`}></img>
                    <div className="profile-username-div">
                        <h3>{`${userProfile?.username}`}</h3>
                    </div>
                    {user.id === Number(userId) && (
                        <div className='profile-button-div'>
                            <button>Edit Profile</button>
                            <ImageUploadModal />
                        </div>
                    )}
                    {user.id !== Number(userId) && (
                        <div className='profile-button-div'>
                            <FollowUnfollow userId={userProfile?.id} />
                        </div>
                    )}
                </div>
                <div className='bottom-profile-info'>
                    <div>{`${images.length}`} posts</div>
                    <div onClick={() => handleModal(followers, 'Followers')}>{`${followers.length}`} followers</div>
                    <div onClick={() => handleModal(following, 'Following')}>{`${following.length}`} following</div>
                    {user.id === Number(userId) && (<div onClick={() => commentModal(comments, 'Comments')}>{`${comments.length}`} comments</div>)}
                </div>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <FollowModal setShowModal={setShowModal} friends={props} title={title} setShowModal={setShowModal} />
                    </Modal>
                )}
                {showCommentModal && (
                    <Modal onClose={() => setShowCommentModal(false)}>
                        <ProfileCommentModal comments={props} title={title} setShowCommentModal={setShowCommentModal} users={users} />
                    </Modal>
                )}

            </div>

            <div className='images_container__profile'>
                {images.length > 0 && images.map(image => (
                    <ImageModal key={image.id} imageId={image.id} user={userProfile} />
                ))}
            </div>



        </div >
    )
}


export default Profile;
