import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink, Link } from "react-router-dom";
import { delete_image, get_feed } from "../../store/feed";
import { get_followings } from "../../store/following"
import './ImageFeed.css'


const ImageFeed = () => {
    const feed = useSelector(state => state.feed)
    const user = useSelector(state => state.session.user)
    const following = useSelector(state => state.following)
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

    const handleDeleteImage = (imgId) => {
        dispatch(delete_image(imgId))
    }

    useEffect(() => {
        (async () => {
            await dispatch(get_followings(user.id));
        })();
    }, [dispatch]);

    let arrayOfId = []
    users.forEach(element => {
        arrayOfId.push(element.id)
    })


    return (
        <>
            <div className="feed-container">
            <div className="feed-subcontainer">
                {feed.loading === true && <h2>Loading</h2>}
                {feed.images && Object.values(feed.images).map(image => (
                    following.users[image?.userId] &&
                    <div className="image-container">
                        <>
                    <div className="image-top-padding">
                        <div className="profile-picture__feed" style={
                            { backgroundImage: `url(${following.users[image?.userId].profileImgUrl})` }
                            }>
                        </div>
                    <div className="profile-username__feed"><Link to={`users/${image?.userId}`} className="feed-profile__link">{users[arrayOfId.indexOf(image.userId)]?.username}</Link></div>
                        </div>
                        <div className="image-container__image" style={
                        { backgroundImage: `url(${image.imgUrl})` }
                            }>
                        </div>
                        <div className="like-comment-container" >
                        <div className="like-button-container" >
                        <i class="far fa-heart" > </i>
                        </div>
                        <div className="like-button-container">
                            <i class="far fa-comment" > </i>
                        </div>
                        </div>
                        <div className="liked-container" >
                        <div className="three-image-container" style={
                        { backgroundImage: `url(${image.imgUrl})` }
                        }>
                        </div>
                        <div className="users-who-liked">Liked by <Link className="link_liked">username</Link> and <Link className="link_liked">100 others</Link></div>
                        <div className="" > </div>
                        </div>
                    <p>{image.caption}</p>
                    <p>{image.userId}</p>
                    {user?.id === image.userId && (
                <>
                <button onClick={() => handleDeleteImage(image.id)}>Delete Image</button>
                        <NavLink to={`/images/${image.id}`}>edit</NavLink>
                    </>
                )}
                </>
                </div>
                ))}
                </div>
            </div>
        </>
    )
}


export default ImageFeed;


