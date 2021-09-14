const SET_FEED_BEGIN = 'feed/SET_FEED_BEGIN'
const SET_FEED_FAIL = 'feed/SET_FEED_FAIL'
const SET_FEED_SUCCESS = 'feed/SET_FEED_SUCCESS'

const SET_IMAGE_BEGIN = 'feed/SET_IMAGE_BEGIN'
const SET_IMAGE_FAIL = 'feed/SET_IMAGE_FAIL'
const SET_IMAGE_SUCCESS = 'feed/SET_IMAGE_SUCCESS'

const DELETE_IMAGE_BEGIN = 'feed/DELETE_IMAGE_BEGIN'
const DELETE_IMAGE_FAIL = 'feed/DELETE_IMAGE_FAIL'
const DELETE_IMAGE_SUCCESS = 'feed/DELETE_IMAGE_SUCCESS'


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



const setImageBegin = () => ({
    type: SET_IMAGE_BEGIN
});

const setImageFail = (error) => ({
    type: SET_IMAGE_FAIL,
    payload: error
});

const setImageSuccess = (image) => ({
    type: SET_IMAGE_SUCCESS,
    payload: image
});


const deleteImageBegin = () => ({
    type: DELETE_IMAGE_BEGIN
});

const deleteImageFail = (error) => ({
    type: DELETE_IMAGE_FAIL,
    payload: error
});

const deleteImageSuccess = (imgId) => ({
    type: DELETE_IMAGE_SUCCESS,
    payload: imgId
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


export const set_image = (imgUrl, caption) => async (dispatch) => {
    dispatch(setImageBegin());
    const response = await fetch('/api/image_feed/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            imgUrl,
            caption,
        }),
    })

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            dispatch(setImageFail('error'))
            return;
        }
        dispatch(setImageSuccess(data))
    }
}

export const update_image = (imgId, caption) => async (dispatch) => {
    dispatch(setImageBegin());
    const response = await fetch(`/api/image_feed/${imgId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            caption,
        }),
    })

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            dispatch(setImageFail('error'))
            return;
        }
        dispatch(setImageSuccess(data))
    }
}


export const delete_image = (imgId) => async (dispatch) => {
    dispatch(deleteImageBegin());
    const response = await fetch(`/api/image_feed/${imgId}`, { method: 'DELETE' })

    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            dispatch(deleteImageFail('error'))
            return;
        }
        dispatch(deleteImageSuccess(data))
    }
}



export default function reducer(state = initialState, action) {
    let newState;
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
        case SET_IMAGE_BEGIN:
            return {
                ...state,
                loading: true,
                errors: null
            }
        case SET_IMAGE_FAIL:
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        case SET_IMAGE_SUCCESS:
            newState = {
                ...state,
                loading: false,
                errors: null,
            }
            newState['images'][action.payload.image.id] = action.payload.image
            return newState
        case DELETE_IMAGE_BEGIN:
                return {
                    ...state,
                    loading: true,
                    errors: null
                }
        case DELETE_IMAGE_FAIL:
                return {
                    ...state,
                    loading: false,
                    errors: action.payload
                }
        case DELETE_IMAGE_SUCCESS:
            newState = {
                ...state,
                loading: false,
                errors: null,
            }
            delete newState['images'][action.payload.imgId]
            return newState
        default:
            return state;
    }
}
