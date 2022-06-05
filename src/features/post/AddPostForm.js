import React from 'react';
import { useState} from 'react-redux';

const AddPostForm = () => {
  const [title, setTitile]=useState([]);
  const [content, setContent]=useState([]);

  onTitleChange = e => setTitile(e.tagert.value);
  onContentChange = e => setContent(e.tagert.value);

  return(
      <section>
        
      </section>
  )
}


export default AddPostForm;