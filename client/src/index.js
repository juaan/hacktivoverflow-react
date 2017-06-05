import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux';
import enUS from 'antd/lib/locale-provider/en_US';

import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={enUS}>
      <App />
    </LocaleProvider>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
