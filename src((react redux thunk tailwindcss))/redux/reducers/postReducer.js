import {
  GET_POSTS,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  POST_ERROR,
  SEARCH_POSTS,
  CANCEL_EDIT,
} from '../types';

const initialState = {
  posts: [],
  filteredPosts: [],
  error: null,
  editPost:null
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload, filteredPosts: action.payload };
    case ADD_POST:
      return { ...state, posts: [action.payload, ...state.posts], filteredPosts: [action.payload, ...state.filteredPosts] };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        ),
        filteredPosts: state.filteredPosts.map(post =>
          post.id === action.payload.id ? action.payload : post
        ),
        editPost:null
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
        filteredPosts: state.filteredPosts.filter(post => post.id !== action.payload),
      };
    case SEARCH_POSTS:
      return {
        ...state,
        filteredPosts: state.posts.filter(post =>
          post.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case POST_ERROR:
      return { ...state, error: action.payload };

    case 'SET_EDIT':
      return{
        ...state,
        editPost: action.payload
      }
    case CANCEL_EDIT:
      return{
        editPost:null
      }
    default:
      return state;
  }
};

export default postReducer;
