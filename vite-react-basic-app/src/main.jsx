import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BackgroundChanger from './BackgroundChanger.jsx';
import Counter from './counter.jsx';
import ClassComponent from './classcomponent.jsx';
import Bosscoder from './Bosscoder.jsx';
import Login from './Login.jsx';
import TodoList from './DynamicContentRendering.jsx';

let user = { username: "Prateek", designation: "Instructor" };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList />
    {/* <BackgroundChanger /> */}
    {/* <Counter counter={15} user={user} />
    <ClassComponent counter={2} /> */}
  </React.StrictMode>,
)
