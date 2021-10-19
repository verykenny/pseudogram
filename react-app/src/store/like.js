const SET_LIKES_BEGIN = 'follower/SET_LIKES_BEGIN'
const SET_LIKES_FAIL = 'follower/SET_LIKES_FAIL'
const SET_LIKES_SUCCESS = 'follower/SET_LIKES_SUCCESS'


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


export default function reducer(state = initialState, action) {
    // let newState;
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
        default:
            return state;
    }
}
