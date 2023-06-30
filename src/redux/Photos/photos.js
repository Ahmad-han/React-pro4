const initialState = {
    photos: [],
    filter: "",
    loadingPhotos: false
}


export const photos = (state = initialState, action) => {
    switch(action.type) {

        case "load/photos/start": 
            return {
                ...state,
                loadingPhotos: true
            }

        case "load/photos/fulfilled":
            return {
                ...state,
                loadingPhotos: false,
                photos: action.payload
            }
        
        case "filter/text":
            return {
                ...state,
                filter: action.payload
            }

    default:
        return state
    }
}