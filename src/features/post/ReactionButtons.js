import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from './postSlice';

const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😯",
    heart: " 💖 ",
    rocket: "🚀",
    coffee: " ☕ "
};

const ReactionButtons  = ({post}) => {
    const dispatch = useDispatch();

    const reactionbutton = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return(
            <button key={name}
                    type="button"
                    className='reactionButton'
                    onClick={() => dispatch(reactionAdded({postId: post.id, reaction: name }))}
                    >
                    {emoji} {post.reactions[name]}
            </button>
        )
    })

    return <div> {reactionbutton} </div>
}

export default ReactionButtons;