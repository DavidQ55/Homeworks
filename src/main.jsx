import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';

import './index.css';
import './App.css';
import { TodoApp } from './components/TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
);
