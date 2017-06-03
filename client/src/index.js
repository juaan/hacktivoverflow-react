import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';

import enUS from 'antd/lib/locale-provider/en_US';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <LocaleProvider locale={enUS}>
    <App />
  </LocaleProvider>
  , document.getElementById('root'));
registerServiceWorker();
