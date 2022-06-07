import { createSlice, nanoid } from "@reduxjs/toolkit"
import { sub } from 'date-fns';

const initialState = [
    {id: "1", 
    title: "Kunfu panda", 
    content: "The panda was lazy and latter became powerfull",
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions:{
        thumbsUp: 0,
        wow: 0,
        heart:0,
        rocket: 0,
        coffee: 0
    }
    },

    {id: "2",
     title: "iniivcible snake", 
     content: "No one could see the harmful snake untill it stuck",
     date: sub(new Date(), {minutes: 5}).toISOString(),
    }
]

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded:{
            reducer(state, action){
                state.push(action.payload);
            },
            prepare(title, content, userId){
                return{
                    payload:{
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        date: new Date().toISOString(),
                        reactions:{
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket:0,
                            coffee:0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action){
            const {postId, reaction} = action.payload;
            const existingPost = state.find(post => post.id === postId);
                if(existingPost){
                    existingPost.reactions[reaction]++
                }
        }
    }
})

//we assign all the state into the selectAllposts function the we render it in our postSlice.js.
export const selectAllPosts = (state) => state.posts

export const { postAdded, reactionAdded} = postSlice.actions

export default postSlice.reducer;