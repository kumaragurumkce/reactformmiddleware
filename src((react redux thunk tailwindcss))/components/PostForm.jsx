import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addPost, searchPosts, updatePost,cancelEdit } from '../redux/actions/postActions';

const PostForm = () => {
  const dispatch = useDispatch();
  const {editPost}=useSelector(state=> state.posts)
  const [formData, setFormData] = useState({ title: '', body: '' });
  const [searchQuery, setSearchQuery] = useState('');

  React.useEffect(() => {
    if (editPost){
      setFormData({ title: editPost.title,body: editPost.body })
    }
      else{
        setFormData({title:'',body:''})
      }
    
  }, [editPost])
  
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = e => {
    setSearchQuery(e.target.value);
    dispatch(searchPosts(e.target.value));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editPost){
      dispatch(updatePost({...editPost, ...formData}))
    }
    else{
      dispatch(addPost({ ...formData, userId: 1 }));
    }
    setFormData({ title: '', body: '' });
    dispatch({type:'SET_EDIT',payload:null})
  };
  const handleCancelEdit= () =>{
    setFormData({ title: '', body: '' });
    dispatch({type:'SET_EDIT',payload:null})
      
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search Posts"
        value={searchQuery}
        onChange={handleSearch}
        className="border p-2 w-full mb-4"
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          required
        />
        <textarea
          name="body"
          placeholder="Body"
          value={formData.body}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          {editPost ? 'Update Post' : 'Add Post'}
        </button>
        {editPost &&( 
          <button type='button' className='ml-5 bg-red-500 text-white px-4 py-2' onClick={handleCancelEdit} >
            Cancel
            </button> ) }
      </form>
    </div>
  );
};

export default PostForm;
