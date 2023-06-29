export const loadAlbums = () => {
    return (dispatch) => {
        dispatch({type: "load/albums/start"})

        fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: "load/albums/fulfilled",
                payload: json
            })
        })
    }
}

export const loadPhotos = () => {
    return (dispatch) => {
        dispatch({type: "load/photos/start"})

        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((json) => {
            dispatch({
                type: "load/photos/fulfilled",
                payload: json
            })
        })
    }
}


export const selectId = (albumId) => {
    return {
        type: "select/userId",
        payload: albumId
    }
}

export const setFilteredText = (text) => {
    return {
        type: "filter/text",
        payload: text
    }
}