import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { get_feed } from "../../store/feed";
import { get_likes } from "../../store/like";

import { get_followings } from "../../store/following"

import './ImageFeed.css'
import ThreeDotsModal from "../ThreeDotsModal";
import LikeUnlikeComponent from "../LikeUnlikeComponent";


const ImageFeed = () => {
    const feed = useSelector(state => state.feed)
    const user = useSelector(state => state.session.user)
    const [users, setUsers] = useState([]);



    const dispatch = useDispatch()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/users/');
            const responseData = await response.json();
            const allUsers = responseData.users;
            const suggestedUsers = allUsers;
            console.log(suggestedUsers);
            setUsers(suggestedUsers);
        }
        fetchData();
    }, []);

    useEffect(() => {
        (async () => {
            await dispatch(get_feed());
            await dispatch(get_likes(user.id))
        })();
    }, [dispatch]);


    useEffect(() => {
        (async () => {
            await dispatch(get_followings(user.id));
        })();
    }, [dispatch, user.id]);


    return (
        <>
            <div className="feed-container">
                <div className="feed-subcontainer">
                    {feed.images && Object.values(feed.images).map(image => (
                        <div key={image?.id} className="image-container">
                            <ImageContainer image={image}/>
                        </div>
                    ))}
                </div>
                <div className="feed-suggested-user-container">
                    <SuggestedUsers users={users} />
                </div>
            </div>
        </>
    )
}


const ImageContainer = ({ image }) => {
    return (
        <>
            <div className="image-top-padding">
                <div className='profile-info__feed'>
                    <div className="profile-picture__feed" style={{ backgroundImage: `url(${image?.user.profileImgUrl})` }}></div>
                    <div className="profile-username__feed"><Link to={`users/${image?.userId}`} className="feed-profile__link">{image?.user.username}</Link></div>
                </div>
                <ThreeDotsModal imageId={image?.id} />
            </div>
            <div className="image-container__feed" style={{ backgroundImage: `url(${image?.imgUrl})` }}></div>
            <div className="like-comment-container__feed" >
                <LikeUnlikeComponent imageId={image?.id} feedpage={true} />
            </div>
            <div className='caption-container__feed'>

                <p>{image?.caption}</p>
            </div>
        </>
    )
}



const SuggestedUsers = ({users}) => {

    return (
        <>
            {users && users.map(user => (
                <div key={user.id} className="user-card__feed">
                    {user.username}
                </div>
            ))}
        </>
    )
}


export default ImageFeed;
