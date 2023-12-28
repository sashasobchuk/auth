import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {SnackbarProvider} from 'notistack'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <SnackbarProvider>
        <App/>
    </SnackbarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to auth results (for example: reportWebVitals(console.auth))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
