/* eslint global-require:"off" */
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { loadCourses } from './actions/course.actions';
import { loadAuthors } from './actions/author.actions';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/store';
import Root from './components/Root';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css';

const store = configureStore();

store.dispatch(loadCourses());
store.dispatch(loadAuthors());

// const history = syncHistoryWithStore(browserHistory, store);

render(
  <AppContainer>
    <Root store={store} history={browserHistory}/>
  </AppContainer>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={browserHistory}/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
