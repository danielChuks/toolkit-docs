import {useSelector} from 'react-redux';
import { selectAllPosts } from './postSlice';

import React from 'react'

const PostList = () => {
    const posts = useSelector(selectAllPosts);


    const renderPosts = posts.map(post => (
        <article key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content.substring(0, 100)}</p>
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