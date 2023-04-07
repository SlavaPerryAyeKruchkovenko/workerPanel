import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import { BrowserRouter } from 'react-router-dom';

import "@Styles/reset200802.css";
import "@Styles/app.css";

const root = ReactDOM.createRoot(document.getElementById('app-root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
