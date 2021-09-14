import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
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
    console.log(following.users)


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
                                    }></div>
                                    <div className="profile-username__feed">{users[arrayOfId.indexOf(image.userId)]?.username}</div>

                                </div>
                                <p>{image.caption}</p>
                                <p>{image.userId}</p>

                                <img src={image.imgUrl} alt={image.caption}></img>
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


