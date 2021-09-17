import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_following, set_new_following } from "../../store/following";
import { useHistory } from 'react-router-dom'
import { get_feed } from "../../store/feed";


const FollowUnfollow = ({ userId }) => {
    const user = useSelector(state => state.session.user)

    const history = useHistory()


    const dispatch = useDispatch()

    const following = user?.following.map(user => user.id).includes(Number(userId))
    const handleFollow = (e) => {
        e.preventDefault()
        const update_following = async () => {
            if (!following) {
                await dispatch(set_new_following(userId))
            } else {
                await dispatch(delete_following(userId))
                if (window.location.href.includes('/users/')) {
                    history.push('/')
                }
            }
            await dispatch(get_feed())
        }
        update_following()
    }

    return (

        <>
                <div >
                    {following.toString()}
            {following === true && (

                    <button onClick={handleFollow}>Unfollow</button>
                    )}
            {!following && (
                <button onClick={handleFollow}>Follow</button>
                )}

                </div>
        </>

    )
}


export default FollowUnfollow;
