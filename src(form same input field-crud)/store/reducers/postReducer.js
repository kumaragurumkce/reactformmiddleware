import { FETCH_POSTS, ADD_POST, DELETE_POST, EDIT_POST, SET_EDIT_POST, CANCEL_EDIT } from '../actions/postActions';

const initialState = {
  posts: [],
  editPost: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, posts: action.payload };
    case ADD_POST:
      return { ...state, posts: [action.payload, ...state.posts] };
    case DELETE_POST:
      return { ...state, posts: state.posts.filter((post) => post.id !== action.payload) };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      
      };
    case SET_EDIT_POST:
      return { ...state, editPost: action.payload };
    case CANCEL_EDIT:
      return { ...state, editPost: null };

    default:
      return state;
  }
};

export default postReducer;
