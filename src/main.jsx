import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';

import { store } from './Store/store';
import './index.css';
import "./App.css";

import { MainApp } from './pages/MainApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <MainApp />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
