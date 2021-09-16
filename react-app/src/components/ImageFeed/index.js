import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { NavLink, Link } from "react-router-dom";
import { delete_image, get_feed } from "../../store/feed";
import { set_new_like } from "../../store/like"
import { get_followings } from "../../store/following"
import { Modal } from "../../context/Modal"
import UsersWhoLiked from "../UsersWhoLikedModal/UsersWhoLikedModal";
import './ImageFeed.css'


const ImageFeed = () => {
    const feed = useSelector(state => state.feed)
    const user = useSelector(state => state.session.user)
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [idForModal, setIdForModal] = useState('')


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

    const handleLike = (imgId) => {
        dispatch(set_new_like(imgId))
    }

    let arrayOfId = []
    users.forEach(element => {
        arrayOfId.push(element.id)
    })

    let getLikeAmount = (imageId) => {
        return feed.images[imageId].totalLikes
    }

    console.log('feed images',feed.images)

    return (
        <>
            <div className="feed-container">
            <div className="feed-subcontainer">
                {feed.loading === true && <h2>Loading</h2>}
                {feed.images && Object.values(feed.images).map(image => (
                    <div key={image.id} className="image-container">
                        <>
                    <div className="image-top-padding">
                        <div className="profile-picture__feed" style={
                                    { backgroundImage: `url(${users[arrayOfId.indexOf(image.userId)]?.profileImgUrl})` }
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
                        <i className="far fa-heart" onClick={() => handleLike(image.id)}></i>
                        </div>
                        <div className="like-button-container">
                            <i className="far fa-comment"></i>
                        </div>
                        </div>
                        <div className="liked-container" >
                        {getLikeAmount(image.id) >1 &&
                        <>
                            <div className="three-image-container" style={
                                { backgroundImage: `url(${image.imgUrl})` }
                            }>
                            </div>
                                    <div className="users-who-liked">Liked by <Link className="link_liked">username</Link> and <Link onClick={() => {setShowModal(true); setIdForModal(image.id);}}className="link_liked">{`${getLikeAmount(image.id)-1} others`}</Link>
                                        {(showModal) && (
                                            <Modal onClose={() => setShowModal(false)}>
                                                <UsersWhoLiked props={feed.images[idForModal]} />
                                            </Modal>
                                        )}
                                    </div>
                        </>
                        }
                        {getLikeAmount(image.id) === 1 &&
                        <>
                            <div className="three-image-container" style={
                                { backgroundImage: `url(${image.imgUrl})` }
                            }>
                            </div>
                            <div className="users-who-liked">Liked by <Link className="link_liked">username</Link></div>
                        </>
                        }
                        {getLikeAmount(image.id) < 1 &&
                            <div className="users-who-liked">0 Likes</div>
                        }
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


