import { createSlice } from "@reduxjs/toolkit"


const initialState = [
    {id: "1", title: "Kunfu panda", content: "The panda was lazy and latter became powerfull"},
    {id: "2", title: "iniivcible snake", content: "No one could see the harmful snake untill it stuck"}
]


const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded(state, action){
            state.push(action.payload);
        }
    }
})

//we assign all the state into the selectAllposts function the we render it in our postSlie.js.
export const selectAllPosts = (state) => state.posts

export default postSlice.reducer;