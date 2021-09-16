import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { NavLink, Link } from "react-router-dom";
import { get_followings } from "../../store/following"
import './UsersWhoLiked.css'

function UsersWhoLiked(showProp){
    const user = useSelector(state => state.session.user)
    const following = useSelector(state => state.following)
    const [users, setUsers] = useState([]);
    const [likesArray, setLikesArray] = useState([]);

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
        async function fetchData() {
            const response = await fetch('/api/likes');
            const responseData = await response.json();
            setLikesArray(responseData.likes);
        }
        fetchData();
    }, []);

    useEffect(() => {
        (async () => {
            await dispatch(get_followings(user.id));
        })();
    }, [dispatch]);

    let arrayOfId = []
    users.forEach(element => {
        arrayOfId.push(element.id)
    })

    let imageId = showProp.props
    
    let arrayOfImageLikes = []
    likesArray.forEach(element => {
        if(element.imgId === imageId){
            arrayOfImageLikes.push(element.user)
        }
    })
    

    return(
        <div className="users-who-liked-container">
            {arrayOfImageLikes.length === 0 &&
        <div>
            <div className="top-menu">Likes</div>
            <div className="users-who-liked-loading">
            </div>
            </div>
            }
        {arrayOfImageLikes.length !==0 &&
        <div>
                <div className="top-menu">Likes</div>
                <div className="users-who-liked-loading">
                </div>
                {arrayOfImageLikes.map(element => (
                    <div className="users-who-liked-loading">
                        <div className="modal-profile-pic" style={
                            { backgroundImage: `url(${element.profileImgUrl})` }
                        }></div>
                        <div className="modal-profile-username">{element.username}</div>
                    </div>
                ))}
        </div>
        }
        </div>
    )
}
 export default UsersWhoLiked