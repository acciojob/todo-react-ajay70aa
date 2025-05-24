
import React from "react";
import './../styles/App.css';
import Todo from "./Todo";

const App = () => {
  return (
    <div id="main">
        {/* Do not remove the main div */}
        <p>To-Do List</p>
        <Todo />
    </div>
  )
}

export default App
