const SET_LIKES_BEGIN = 'follower/SET_LIKES_BEGIN'
const SET_LIKES_FAIL = 'follower/SET_LIKES_FAIL'
const SET_LIKES_SUCCESS = 'follower/SET_LIKES_SUCCESS'

const SET_NEW_LIKE_BEGIN = 'follower/SET_NEW_LIKE_BEGIN'
const SET_NEW_LIKE_FAIL = 'follower/SET_NEW_LIKE_FAIL'
const SET_NEW_LIKE_SUCCESS = 'follower/SET_NEW_LIKE_SUCCESS'

const DELETE_LIKE_BEGIN = 'feed/DELETE_LIKE_BEGIN'
const DELETE_LIKE_FAIL = 'feed/DELETE_LIKE_FAIL'
const DELETE_LIKE_SUCCESS = 'feed/DELETE_LIKE_SUCCESS'


const setLikesBegin = () => ({
    type: SET_LIKES_BEGIN,
})
const setLikesFail = (error) => ({
    type: SET_LIKES_FAIL,
    payload: error
})
const setLikesSuccess = ({ likes }) => ({
    type: SET_LIKES_SUCCESS,
    payload: likes
})


const setNewLikeBegin = () => ({
    type: SET_NEW_LIKE_BEGIN,
})
const setNewLikeFail = (error) => ({
    type: SET_NEW_LIKE_FAIL,
    payload: error
})
const setNewLikeSuccess = ({ like }) => ({
    type: SET_NEW_LIKE_SUCCESS,
    payload: like
})


const deleteLikeBegin = () => ({
    type: DELETE_LIKE_BEGIN,
})
const deleteLikeFail = (error) => ({
    type: DELETE_LIKE_FAIL,
    payload: error
})
const deleteLikeSuccess = ({ like }) => ({
    type: DELETE_LIKE_SUCCESS,
    payload: like
})


const initialState = {
    likes: {},
    loading: false,
    errors: null
}

export const get_likes = () => async (dispatch) => {
    dispatch(setLikesBegin());
    const response = await fetch(`/api/likes`)

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            dispatch(setLikesFail('error'))
            return;
        }
        dispatch(setLikesSuccess(data))
    }
}

export const set_new_like = (imgId) => async (dispatch) => {
    dispatch(setNewLikeBegin());
    const response = await fetch(`/api/image_feed/${imgId}/likes/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            dispatch(setNewLikeFail('error'))
            return;
        }
        dispatch(setNewLikeSuccess(data))
    }
}


export const delete_like = (imgId) => async (dispatch) => {
    dispatch(deleteLikeBegin());
    const response = await fetch(`/api/image_feed/${imgId}/likes/delete`, { method: 'DELETE' })

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            dispatch(deleteLikeFail('error'))
            return;
        }
        dispatch(deleteLikeSuccess(data))
    }
}


export default function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case SET_LIKES_BEGIN:
            return {
                ...state,
                loading: true,
                errors: null
            };
        case SET_LIKES_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        case SET_LIKES_SUCCESS:
            const likeObjs = {}
            for (let like of action.payload) {
                likeObjs[like.id] = like
            }
            return {
                ...state,
                loading: false,
                errors: null,
                likes: likeObjs
            };
        case SET_NEW_LIKE_BEGIN:
            return {
                ...state,
                loading: true,
                errors: null
            };
        case SET_NEW_LIKE_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        case SET_NEW_LIKE_SUCCESS:
            newState = {
                ...state,
                loading: false,
                errors: null
            }
            newState['likes'][action.payload.id] = action.payload
            return newState;
        case DELETE_LIKE_BEGIN:
            return {
                ...state,
                loading: true,
                errors: null
            }
        case DELETE_LIKE_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        case DELETE_LIKE_SUCCESS:
            newState = {
                ...state,
                loading: false,
                errors: null,
            }
            delete newState['likes'][action.payload.id]
            return newState
        default:
            return state;
    }
}
