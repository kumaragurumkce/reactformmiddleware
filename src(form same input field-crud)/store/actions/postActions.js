import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';
export const SET_EDIT_POST = 'SET_EDIT_POST';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = () => async (dispatch) => {
  const response = await axios.get(API_URL);
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const addPost = (post) => async (dispatch) => {
  const response = await axios.post(API_URL, post);
  dispatch({ type: ADD_POST, payload: response.data, id: Date.now() });
};

export const deletePost = (id) => async (dispatch) => {
  await axios.delete(`${API_URL}/${id}`);
  dispatch({ type: DELETE_POST, payload: id });
};

// export const editPost = (id, updatedPost) => async (dispatch) => {
//   const response = await axios.put(`${API_URL}/${id}`, updatedPost);
//   dispatch({ type: EDIT_POST, payload: response.data });
// };

export const editPost = (id, updatedPost) => async (dispatch) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, updatedPost);
    dispatch({ type: EDIT_POST, payload: {...response.data, id} });
  } catch (error) {
    console.error("Error updating post:", error);
    alert("Failed to update post");
  }
};


export const setEditPost = (post) => ({
  type: SET_EDIT_POST,
  payload: post,
});
