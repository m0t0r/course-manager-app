import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './../components/home/HomePage';
import AboutPage from './../components/about/AboutPage';
import CoursesPage from './../components/course/CoursesPage';

export default (App) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="courses" component={CoursesPage}/>
      <Route path="about" component={AboutPage}/>
    </Route>
  );
};
