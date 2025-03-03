import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, deletePost, setEditPost } from '../store/actions/postActions';
import PostForm from './PostForm';

  const PostList = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <PostForm />
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <button onClick={() => dispatch(setEditPost(post))}>Edit</button>
          <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
