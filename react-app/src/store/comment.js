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


const setNewCommentBegin = () => ({
    type: SET_NEW_COMMENT_BEGIN,
})
const setNewCommentFail = (error) => ({
    type: SET_NEW_COMMENT_FAIL,
    payload: error
})
const setNewCommentSuccess = ({ comment }) => ({
    type: SET_NEW_COMMENT_SUCCESS,
    payload: comment
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

export const set_new_comment = (content, imgId) => async (dispatch) => {
    dispatch(setNewCommentBegin());
    const response = await fetch(`/api/image_feed/${imgId}/comments/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content
        }),
    })

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            dispatch(setNewCommentFail('error'))
            return;
        }
        dispatch(setNewCommentSuccess(data))
    }
}




export default function reducer(state = initialState, action) {
    let newState;
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
        case SET_NEW_COMMENT_BEGIN:
            return {
                ...state,
                loading: true,
                errors: null
            };
        case SET_NEW_COMMENT_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        case SET_NEW_COMMENT_SUCCESS:
            newState = {
                ...state,
                loading: false,
                errors: null
            }
            newState['comments'][action.payload.id] = action.payload
            return newState;
        default:
            return state;
    }
}
