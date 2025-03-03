import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, editPost, cancelEdit } from '../store/actions/postActions';

const PostForm = () => {
  const dispatch = useDispatch();
  const editPostData = useSelector((state) => state.posts.editPost);
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    if (editPostData) {
      setPostContent(editPostData.title);
    }
  }, [editPostData]);

  const handleCancelEdit = ()=>{
    dispatch(cancelEdit())
    setPostContent('')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (postContent.trim()){
    if (editPostData) {
      dispatch(editPost(editPostData.id, { title: postContent }));
    } else {
      dispatch(addPost({ title: postContent }));
    }
    setPostContent('');
  } else {
    alert("Post content cannot be empty")
  }
}

  return (
    <form className='post-form' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Post"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
      <button type="submit">{editPostData ? 'Update' : 'Add'} Post</button>
      {editPostData && <button type='button' onClick={handleCancelEdit}>Cancel</button> }
    </form>
  );
};

export default PostForm;
