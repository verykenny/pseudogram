import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { get_feed } from "../../store/feed";

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
            setUsers(responseData.users);
        }
        fetchData();
    }, []);

    useEffect(() => {
        (async () => {
            await dispatch(get_feed());
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
                    {feed.loading === true && <h2>Loading</h2>}
                    {feed.images && Object.values(feed.images).map(image => (
                        <div key={image?.id} className="image-container">
                            <>
                                <div className="image-top-padding">
                                    <div className="profile-picture__feed" style={
                                        { backgroundImage: `url(${image?.user.profileImgUrl})` }
                                    }>
                                    </div>
                                    <div className="profile-username__feed"><Link to={`users/${image?.userId}`} className="feed-profile__link">{image?.user.username}</Link></div>
                                    <ThreeDotsModal imageId={image?.id} />
                                </div>
                                <div className="image-container__image" style={
                                    { backgroundImage: `url(${image?.imgUrl})` }
                                }>
                                </div>
                                <div className="like-comment-container" >
                                    <LikeUnlikeComponent imageId={image?.id} feedpage={true}/>
                                </div>
                                <div className="liked-container" >
                                </div>
                                <p>{image?.caption}</p>
                            </>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


export default ImageFeed;
