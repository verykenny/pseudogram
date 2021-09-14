const SET_LIKE_BEGIN = 'follower/SET_LIKE_BEGIN'
const SET_LIKE_FAIL = 'follower/SET_LIKE_FAIL'
const SET_LIKE_SUCCESS = 'follower/SET_LIKE_SUCCESS'


const setLikeBegin = () => ({
    type: SET_LIKE_BEGIN,
})
const setLikeFail = (error) => ({
    type: SET_LIKE_FAIL,
    payload: error
})
const setLikeSuccess = ({ likes }) => ({
    type: SET_LIKE_SUCCESS,
    payload: likes
})



const initialState = {
    likes: {},
    loading: false,
    errors: null
}

export const get_likes = () => async (dispatch) => {
    dispatch(setLikeBegin());
    const response = await fetch(`/api/likes`)

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            dispatch(setLikeFail('error'))
            return;
        }
        dispatch(setLikeSuccess(data))
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_LIKE_BEGIN:
            return {
                ...state,
                loading: true,
                errors: null
            };
        case SET_LIKE_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        case SET_LIKE_SUCCESS:
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
