import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { initialAlbumState } from "../../types/types"


const initialState: initialAlbumState = {
    albums: [],
    selectedUserId: null,
    loadingAlbums: false,
}

export const loadAlbums = createAsyncThunk(
    "FETCH_ALBUMS",
     async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/albums")
        return res.json()
    }
)

export const AlbumSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(loadAlbums.pending, (state) => {
            state.loadingAlbums = true
        })
        .addCase(loadAlbums.fulfilled, (state, action) => {
            state.loadingAlbums = false
            state.albums = action.payload
        })
    }
})




export default AlbumSlice.reducer