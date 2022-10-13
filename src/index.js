import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div
        style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <App />
      </div>
    </Router>
  </React.StrictMode>
);
