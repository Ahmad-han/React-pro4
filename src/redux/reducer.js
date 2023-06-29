

const initialState = {
    albums: [],
    photos: [],

    selectedUserId: null,
    filter: "",

    loadingAlbums: false,
    loadingPhotos: false
}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "load/albums/start":
            return {
                ...state,
                loadingAlbums: true
            }

        case "load/albums/fulfilled":
            return {
                ...state,
                loadingAlbums: false,
                albums: action.payload
            }

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

        case "select/userId":
            return {
                ...state,
                selectedUserId: action.payload
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