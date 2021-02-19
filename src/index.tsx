import 'dotenv/config';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import GlobalTheme from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <GlobalTheme />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
