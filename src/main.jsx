import React from 'react';
import ReactDOM from 'react-dom/client';
//import FirstApp from './FirstApp'
import './index.css'
import "./App.css"

import { TodoAdd } from './components/TodoAdd';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoAdd/>
  </React.StrictMode>,
)
