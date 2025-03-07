import React from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import ThemeToggle from './components/ThemeToggle';


const App=()=>{
    return(

      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 ">Crud with search</h1>
      <ThemeToggle />

        <PostForm />
        <PostList />
      </div>
    )
}
export default App;