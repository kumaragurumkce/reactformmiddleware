import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, deletePost, editPost } from '../store/actions/postActions';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [editMode, setEditMode] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedBody, setUpdatedBody] = useState('');

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleEdit = (post) => {
    setEditMode(post.id);
    setUpdatedTitle(post.title);
    setUpdatedBody(post.body);
  };

  const handleUpdate = (id) => {
    dispatch(editPost(id, { title: updatedTitle, body: updatedBody }));
    setEditMode(null);
    setUpdatedTitle('');
    setUpdatedBody('');
  };

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          {editMode === post.id ? (
            <div>
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
              />
              <textarea
                value={updatedBody}
                onChange={(e) => setUpdatedBody(e.target.value)}
              />
              <button onClick={() => handleUpdate(post.id)}>Save</button>
              <button onClick={() => setEditMode(null)}>Cancel</button>
            </div>
          ) : (
            <div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button onClick={() => handleEdit(post)}>Edit</button>
              <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
