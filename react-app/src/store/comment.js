const SET_COMMENTS_BEGIN = 'comments/SET_COMMENTS_BEGIN'
const SET_COMMENTS_FAIL = 'comments/SET_COMMENTS_FAIL'
const SET_COMMENTS_SUCCESS = 'comments/SET_COMMENTS_SUCCESS'

const SET_NEW_COMMENT_BEGIN = 'comments/SET_NEW_COMMENT_BEGIN'
const SET_NEW_COMMENT_FAIL = 'comments/SET_NEW_COMMENT_FAIL'
const SET_NEW_COMMENT_SUCCESS = 'comments/SET_NEW_COMMENT_SUCCESS'

const setCommentsBegin = () => ({
    type: SET_COMMENTS_BEGIN,
})
const setCommentsFail = (error) => ({
    type: SET_COMMENTS_FAIL,
    payload: error
})
const setCommentsSuccess = ({ comments }) => ({
    type: SET_COMMENTS_SUCCESS,
    payload: comments
})



const initialState = {
    comments: {},
    loading: false,
    errors: null
}

export const get_comments = (userId) => async (dispatch) => {
    dispatch(setCommentsBegin());
    const response = await fetch(`/api/comments/`)

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            dispatch(setCommentsFail('error'))
            return;
        }
        dispatch(setCommentsSuccess(data))
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_COMMENTS_BEGIN:
            return {
                ...state,
                loading: true,
                errors: null
            };
        case SET_COMMENTS_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        case SET_COMMENTS_SUCCESS:
            const commentObjs = {}
            for (let comment of action.payload) {
                commentObjs[comment.id] = comment
            }
            return {
                ...state,
                loading: false,
                errors: null,
                comments: commentObjs
            };
        default:
            return state;
    }
}
