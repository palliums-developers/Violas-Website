import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from './router/routerConfig';
import "lib-flexible";
import './index.scss';
import intl from 'react-intl-universal';
import EN from './locales/en';

let lang = (navigator.languages && navigator.languages[0]) || navigator.language
intl.init({
  currentLocale: lang.split('-')[0],
  locales: {
    EN
  }
})
ReactDOM.render(<RouterConfig></RouterConfig>, document.getElementById('root'));

