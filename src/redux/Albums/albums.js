const initialState = {
    albums: [],
    selectedUserId: null,
    loadingAlbums: false,
}

export const albums = (state = initialState, action) => {
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
        
         case "select/userId":
            return {
                ...state,
                selectedUserId: action.payload,
                }


        default:
            return state
    }
}