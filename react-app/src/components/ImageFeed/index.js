import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom";
import { get_feed } from "../../store/feed";
import { get_likes } from "../../store/like";

import { get_followings } from "../../store/following"

import './ImageFeed.css'
import ThreeDotsModal from "../ThreeDotsModal";
import LikeUnlikeComponent from "../LikeUnlikeComponent";


const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date).valueOf()) / 1000);
    if (seconds < 60) return `${seconds} seconds ago`
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return (minutes > 1) ? `${minutes} minutes ago` : `1 minute ago`
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return (hours > 1) ? `${hours} hours ago` : `1 hour ago`
    const days = Math.floor(hours / 24);
    if (days < 30) return (days > 1) ? `${days} days ago` : `1 day ago`
    const months = Math.floor(days / 30);
    return (months > 1) ? `${months} months ago` : `1 month ago`
}

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
            const suggestedUsers = allUsers.filter(usr => !user.following.includes(usr.id));
            setUsers(suggestedUsers.slice(0, 5));
        }
        fetchData();
    }, [user.following]);

    useEffect(() => {
        (async () => {
            await dispatch(get_feed());
            await dispatch(get_likes(user.id))
        })();
    }, [dispatch, user.id]);


    useEffect(() => {
        (async () => {
            await dispatch(get_followings(user.id));
        })();
    }, [dispatch, user.id]);




    return (
        <>
            <div className="feed-container">
                <div className="feed-subcontainer">
                    {feed.images && Object.values(feed.images).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).map(image => (
                        <div key={image?.id} className="image-container">
                            <ImageContainer image={image}/>
                        </div>
                    ))}
                </div>
                <div className="feed-suggested-user-container">
                    <h2>Suggested friends</h2>
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
                <p>{timeAgo(image?.createdAt)}</p>
                <p>{image?.createdAt}</p>
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
                    <NavLink className='profile-link__feed' to={`/users/${user.id}`} ><img className='profile-img-nav profile-img__feed' src={`${user.profileImgUrl}`} alt={user.id}></img></NavLink>
                    <NavLink className='profile-link__feed' to={`/users/${user.id}`} >{`${user.username}`}</NavLink>
                </div>
            ))}
        </>
    )
}


export default ImageFeed;
