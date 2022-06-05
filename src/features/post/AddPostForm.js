import React from 'react';
import { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {postAdded} from './postSlice';
import { selectAllUsers } from '../users/usersSlice';


const AddPostForm = () => {

  const dispatch = useDispatch();
  const [title, setTitle]=useState('');
  const [content, setContent]=useState('');
  const [userId, setUserId] =useState('');

  //The users variable takes all the users from the usersSlice 
  const users = useSelector(selectAllUsers);

  //This event handlers handle the local state of our event.
  const onTitleChange = e => setTitle(e.target.value);
  const onContentChange = e => setContent(e.target.value);
  const onAuthorChange = e => setUserId(e.target.value);

  /**
   * OnSavedPostClick is a function that gets called when the input filled that contains title, content and userId are been filled and submitted.
   */
  const onSavePostClicked = () => {
    if(title && content){
      dispatch(
        postAdded(title, content, userId)
      )
      setTitle('')
      setContent('')
    }
  }

  //The variable canSave checks if title, content and userId filed are empty if they are empty it would remain disabled untill they are filled.
const canSave =  Boolean(title) &&  Boolean(content) && Boolean(userId);

//In the userOptions variable, we are mapping the users getting the ID, & NAME of each users.
  const userOptions = users.map(user => (
    <option key={user.id} value={user.id}>
        {user.name}
    </option>
  ))
  return(
      <section>
          <h2> Add new post </h2>
          <form>
              <label htmlFor='postTitle'>Post Title </label>
              <input
                type="text"
                id='postTitle'
                name="postTitle"
                value={title}
                onChange={onTitleChange}
              />
              <label htmlFor='author'>Author</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChange}>
                  <option value="">select a user</option>
                  {userOptions}
                </select>
              <label htmlFor='content'>Content:</label>
              <textarea 
                type="text"
                id="content"
                name="content"
                value={content}
                onChange={onContentChange}
              />
              <button 
                type='button' 
                onClick={onSavePostClicked}
                disabled={!canSave}
                >Save post</button>
          </form>
      </section>
  )
}


export default AddPostForm;