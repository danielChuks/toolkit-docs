import {useSelector} from 'react-redux';
import { selectAllPosts } from './postSlice';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

import React from 'react'

const PostList = () => {
    const posts = useSelector(selectAllPosts);


    const renderPosts = posts.map(post => (
        <article key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content.substring(0, 100)}</p>
            <p className='postCredit'>
              <PostAuthor userId={post.userId}/> 
              <TimeAgo timestamp={post.date} />
            </p>
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