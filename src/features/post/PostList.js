import {useSelector} from 'react-redux';
import { selectAllPosts } from './postSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

import React from 'react'

const PostList = () => {
    const posts = useSelector(selectAllPosts);

    //We initially was mapping through the post but now we are creating a new variable that will use the localeCompare to check the date to ensure the most recent post comes to the top when post are made.
    const orderedPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderPosts = orderedPost.map(post => (
        <article key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content.substring(0, 100)}</p>
            <p className='postCredit'>
              <PostAuthor userId={post.userId}/>  
              <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} /> 
        </article>
    ));

  return (
    <section>
        <h1> Post </h1>
        {renderPosts}
    </section>
  )
}

export default PostList;