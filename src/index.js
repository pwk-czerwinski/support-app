import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import i18n from './translations/i18n';

ReactDOM.render(
  <React.StrictMode>
    <App i18n={i18n} />
  </React.StrictMode>,
  document.getElementById('root')
);
