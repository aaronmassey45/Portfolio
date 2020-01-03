import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
      <footer id="main-footer">
        Aaron Massey &copy; {new Date().getFullYear()}
      </footer>
    </>
  </Router>
);

export default App;
