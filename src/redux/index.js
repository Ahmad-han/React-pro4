import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { albums } from "./Albums/albums";
import { photos } from "./Photos/photos";


const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootState = combineReducers({
    albums: albums,
    photos: photos
})



export const store = createStore(rootState, applyMiddleware(thunk, logger))