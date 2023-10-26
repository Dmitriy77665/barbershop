import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

import './components/style/global.scss';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
