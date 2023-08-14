import { configureStore } from '@reduxjs/toolkit'
import AlbumsReducer from "./Albums/AlbumsSlice"
import PhotoReducer from "./Photos/PhotoSlice"



export const store = configureStore({
  reducer: {
    albums: AlbumsReducer,
    photos: PhotoReducer
  },
})