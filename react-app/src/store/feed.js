const SET_FEED = 'feed/SET_FEED'

const setFeed = (feed) => ({
    type: SET_FEED,
    payload: feed
});


const initialState = {}

export const get_feed = () => async (dispatch) => {
    const response = await fetch('/api/image_feed')

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }
        dispatch(setFeed(data))
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_FEED:
            return { feed: action.payload }
        default:
            return state;
    }
}
