import {configureStore} from "@reduxjs/toolkit";
import postReducers from '../features/post/postSlice';


export const store =  configureStore({
    reducer : {
        posts: postReducers
    }
})