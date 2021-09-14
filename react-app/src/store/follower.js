const SET_FOLLOWER_BEGIN = 'follower/SET_FOLLOWER_BEGIN'
const SET_FOLLOWER_FAIL = 'follower/SET_FOLLOWER_FAIL'
const SET_FOLLOWER_SUCCESS = 'follower/SET_FOLLOWER_SUCCESS'


const setFollowerBegin = () => ({
    type: SET_FOLLOWER_BEGIN,
})
const setFollowerFail = (error) => ({
    type: SET_FOLLOWER_FAIL,
    payload: error
})
const setFollowerSuccess = ({ followers }) => ({
    type: SET_FOLLOWER_SUCCESS,
    payload: followers
})



const initialState = {
    users: {},
    loading: false,
    errors: null
}

export const get_followers = (userId) => async (dispatch) => {
    dispatch(setFollowerBegin());
    const response = await fetch(`/api/users/${userId}/followers`)

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            dispatch(setFollowerFail('error'))
            return;
        }
        dispatch(setFollowerSuccess(data))
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_FOLLOWER_BEGIN:
            return {
                ...state,
                loading: true,
                errors: null
            };
        case SET_FOLLOWER_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload
            };
        case SET_FOLLOWER_SUCCESS:
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
