import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delete_following, get_followings, set_new_following } from "../../store/following";
import { useHistory } from 'react-router-dom'


const FollowUnfollow = ({ userId }) => {
    const user = useSelector(state => state.session.user)
    const followings = useSelector(state => state.following)

    const history = useHistory()
    const following = useSelector(state => state.following.users[userId] !== undefined)


    const dispatch = useDispatch()

    useEffect(() => {
        const update_followings = () => {
            dispatch(get_followings(user.id))
        }
        update_followings()


    }, [dispatch, user.id])



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

            await dispatch(get_followings(user.id))
        }
        update_following()
    }

    return (
        <>
            {!followings.loading && (
                <>
                    {following && (
                        <button onClick={handleFollow}>Unfollow</button>
                    )}
                    {!following && (
                        <button onClick={handleFollow}>Follow</button>
                    )}

                </>
            )}
        </>
    )
}


export default FollowUnfollow;
