import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalContext from './components/utils/GlobalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<GlobalContext>
    <App />
</GlobalContext>

);

