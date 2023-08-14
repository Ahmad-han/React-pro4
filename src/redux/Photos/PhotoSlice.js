import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    photos: [],
    filter: "",
    loadingPhotos: false
}

export const loadPhotos = createAsyncThunk(
    "FETCH_PHOTO",
    async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos")
        return res.json()
    }
)


export const setFilteredText = createAsyncThunk(
    "FILTER_TEXT",
    async({ text }) => {
        return {
            text
        }
    }
)

export const PhotoSlice = createSlice({
    name: "photos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
       .addCase(loadPhotos.pending, (state) => {
            state.loadingPhotos = true
       })
       .addCase(loadPhotos.fulfilled, (state, action) => {
        state.loadingPhotos = false
        state.photos = action.payload
       })
       .addCase(setFilteredText.fulfilled, (state, action) => {
            state.filter = action.payload.text
       })
    }
})




export default PhotoSlice.reducer