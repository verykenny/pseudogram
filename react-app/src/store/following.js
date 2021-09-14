const SET_FOLLOWING_BEGIN = 'following/SET_FOLLOWING_BEGIN'
const SET_FOLLOWING_FAIL = 'following/SET_FOLLOWING_FAIL'
const SET_FOLLOWING_SUCCESS = 'following/SET_FOLLOWING_SUCCESS'

const SET_NEW_FOLLOW_BEGIN = 'following/SET_NEW_FOLLOW_BEGIN'
const SET_NEW_FOLLOW_FAIL = 'following/SET_NEW_FOLLOW_FAIL'
const SET_NEW_FOLLOW_SUCCESS = 'following/SET_NEW_FOLLOW_SUCCESS'

const DELETE_FOLLOW_BEGIN = 'following/DELETE_FOLLOW_BEGIN'
const DELETE_FOLLOW_FAIL = 'following/DELETE_FOLLOW_FAIL'
const DELETE_FOLLOW_SUCCESS= 'following/DELETE_FOLLOW_SUCCESS'



const setFollowingBegin = () => ({
    type: SET_FOLLOWING_BEGIN,
})
const setFollowingFail = (error) => ({
    type: SET_FOLLOWING_FAIL,
    payload: error
})
const setFollowingSuccess = ({ followings }) => ({
    type: SET_FOLLOWING_SUCCESS,
    payload: followings
})


const setNewFollowBegin = () => ({
    type: SET_NEW_FOLLOW_BEGIN,
})
const setNewFollowFail = (error) => ({
    type: SET_NEW_FOLLOW_FAIL,
    payload: error
})
const setNewFollowSuccess = ({ following }) => ({
    type: SET_NEW_FOLLOW_SUCCESS,
    payload: following
})

const deleteFollowBegin = () => ({
    type: DELETE_FOLLOW_BEGIN,
})
const deleteFollowFail = (error) => ({
    type: DELETE_FOLLOW_FAIL,
    payload: error
})
const deleteFollowSuccess = ({ unfollowed }) => ({
    type: DELETE_FOLLOW_SUCCESS,
    payload: unfollowed
})



const initialState = {
    users: {},
    loading: false,
    errors: null
}

export const get_followings = (userId) => async (dispatch) => {
    dispatch(setFollowingBegin());
    const response = await fetch(`/api/users/${userId}/followings`)

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            dispatch(setFollowingFail('error'))
            return;
        }
        dispatch(setFollowingSuccess(data))
    }
}

export const set_new_following = (userId) => async (dispatch) => {
    dispatch(setNewFollowBegin());
    const response = await fetch(`/api/users/${userId}/followings/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            dispatch(setNewFollowFail('error'))
            return;
        }
        dispatch(setNewFollowSuccess(data))
    }
}


export const delete_following = (userId) => async (dispatch) => {
    dispatch(deleteFollowBegin());
    const response = await fetch(`/api/users/${userId}/followings/delete`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            dispatch(deleteFollowFail('error'))
            return;
        }
        dispatch(deleteFollowSuccess(data))
    }
}


export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_FOLLOWING_BEGIN:
            return {
                ...state,
                loading: true,
                errors: null
            };
        case SET_FOLLOWING_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        case SET_FOLLOWING_SUCCESS:
            const userObjs = {}
            for (let user of action.payload) {
                userObjs[user.id] = user
            }
            return {
                ...state,
                loading: false,
                errors: null,
                users: userObjs
            };
        case SET_NEW_FOLLOW_BEGIN:
            return {
                ...state,
                loading: true,
                errors: null
            };
        case SET_NEW_FOLLOW_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        case SET_NEW_FOLLOW_SUCCESS:
            newState = {
                ...state,
                loading: false,
                errors: null,
            }
            newState['users'][action.payload.id] = action.payload
            return newState;
        case DELETE_FOLLOW_BEGIN:
            return {
                ...state,
                loading: true,
                errors: null
            };
        case DELETE_FOLLOW_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        case DELETE_FOLLOW_SUCCESS:
            newState = {
                ...state,
                loading: false,
                errors: null,
            }
            delete newState['users'][action.payload.id]
            return newState;
        default:
            return state;
    }
}
