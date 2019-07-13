import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './components/Header/Header';
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/about-page/AboutPage'));
const Contact = lazy(() => import('./components/Contact'));
const ProjectsList = lazy(() => import('./components/Projects/ProjectsList'));
const NoMatch = lazy(() => import('./components/NoMatch'));

const App = () => (
  <Router>
    <>
      <Header />
      <Suspense fallback={<main />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/projects" component={ProjectsList} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Suspense>
      <footer id="main-footer">
        Aaron Massey &copy; {new Date().getFullYear()}
      </footer>
    </>
  </Router>
);

/* eslint-disable react/forbid-foreign-prop-types */
Route.propTypes.component = PropTypes.oneOfType([
  Route.propTypes.component,
  PropTypes.object,
]);
/* eslint-enable react/forbid-foreign-prop-types */

export default App;
