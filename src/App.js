import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
   
     <div className="app__header">
       <img 
       className="app__headerImage"
       src="https://bit.ly/34n3HYS "
       alt=""
       />
       </div>
       <h1> first tyme in react </h1>
       <Post />

    </div>
  );
}

export default App;
