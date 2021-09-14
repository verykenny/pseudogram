const SET_FOLLOWING_BEGIN = 'following/SET_FOLLOWING_BEGIN'
const SET_FOLLOWING_FAIL = 'following/SET_FOLLOWING_FAIL'
const SET_FOLLOWING_SUCCESS = 'following/SET_FOLLOWING_SUCCESS'


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
        default:
            return state;
    }
}
