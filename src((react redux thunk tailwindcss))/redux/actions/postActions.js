import axios from 'axios';
import {
  GET_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  POST_ERROR,
  SEARCH_POSTS,
  CANCEL_EDIT
} from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get(API_URL);
    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (error) {
    dispatch({ type: POST_ERROR, payload: error.message });
  }
};

export const addPost = post => async dispatch => {
  try {
    const res = await axios.post(API_URL, post);
    dispatch({ type: ADD_POST, payload: res.data, id: Date.now() });
  } catch (error) {
    dispatch({ type: POST_ERROR, payload: error.message });
  }
};

export const updatePost = (post) => async dispatch => {
  try {
    if (post.id <= 100) {
      const res = await axios.put(`${API_URL}/${post.id}`, post);
      dispatch({ type: UPDATE_POST, payload: res.data });
          dispatch(cancelEdit);
      
    } else {
      
      dispatch({ type: UPDATE_POST, payload: post });
      console.warn(`Post ${post.id} updated locally because JSONPlaceholder doesn't support ID > 100`);
    }
  }  catch (error) {
    dispatch({ type: POST_ERROR, payload: error.message });
  }
};

export const deletePost = id => async dispatch => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: DELETE_POST, payload: id });
  } catch (error) {
    dispatch({ type: POST_ERROR, payload: error.message });
  }
};

export const searchPosts = query => dispatch => {
  dispatch({ type: SEARCH_POSTS, payload: query });
};
export const cancelEdit= ()=>({
    type:CANCEL_EDIT,
})