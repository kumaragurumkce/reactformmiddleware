import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, deletePost } from '../redux/actions/postActions';

const PostList = () => {
  const dispatch = useDispatch();
  const { filteredPosts, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);


  return (
    <div>
      {filteredPosts.map(post => (
        <div key={post.id} className="border p-4 mb-4">
          <h3>{post.title}</h3>
           <p>{post.body}</p>
           <button onClick={()=> dispatch({type: 'SET_EDIT',payload: post})} 
            className='bg-yellow-500 text-white px-3 py-1 mr-2'>Edit</button>
          <button
            onClick={() => dispatch(deletePost(post.id))}
            className="bg-red-500 text-white px-3 py-1">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
