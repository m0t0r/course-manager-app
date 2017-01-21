/* eslint global-require:"off" */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
// AppContainer is a necessary wrapper component for HMR
import { AppContainer } from 'react-hot-loader';
import getRoutes from './routes/routes';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';

import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Router history={browserHistory} routes={getRoutes(Component)}/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default;
    render(NewApp);
  });
}
