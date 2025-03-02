import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Post CRUD App</h1>
        <PostForm />
        <PostList />
      </div>
    </Provider>
  );
};

export default App;
