const SET_FEED_BEGIN = 'feed/SET_FEED_BEGIN'
const SET_FEED_FAIL = 'feed/SET_FEED_FAIL'
const SET_FEED_SUCCESS = 'feed/SET_FEED_SUCCESS'


const setFeedBegin = () => ({
    type: SET_FEED_BEGIN
});

const setFeedFail = (error) => ({
    type: SET_FEED_FAIL,
    payload: error
});

const setFeedSuccess = (feed) => ({
    type: SET_FEED_SUCCESS,
    payload: feed.images
});




const initialState = {
    images: {},
    loading: false,
    errors: null
}

export const get_feed = () => async (dispatch) => {
    dispatch(setFeedBegin());
    const response = await fetch('/api/image_feed')

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            dispatch(setFeedFail('error'))
            return;
        }
        dispatch(setFeedSuccess(data))
    }

}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_FEED_BEGIN:
            return {
                ...state,
                loading: true,
                errors: null
            }
        case SET_FEED_FAIL:
            return {
                ...state,
                images: {},
                loading: false,
                errors: action.payload
            }
        case SET_FEED_SUCCESS:
            const imagesObjs = {}
            for (let image of action.payload) {
                imagesObjs[image.id] = image
            }
            return {
                ...state,
                loading: false,
                errors: null,
                images: imagesObjs
            }
        default:
            return state;
    }
}
