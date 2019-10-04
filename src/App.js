import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'components/Header/Header';

const AboutPage = lazy(() => import('pages/about-page/AboutPage'));
const ContactPage = lazy(() => import('pages/ContactPage'));
const HomePage = lazy(() => import('pages/HomePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const ProjectsPage = lazy(() => import('pages/projects-page/ProjectsPage'));

const App = () => (
  <Router>
    <>
      <Header />
      <Suspense fallback={<main />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
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
