import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from 'components/Header/Header';

const NotFoundPage = lazy(() => import('pages/404-page/NotFoundPage'));
const AboutPage = lazy(() => import('pages/about-page/AboutPage'));
const ContactPage = lazy(() => import('pages/contact-page/ContactPage'));
const HomePage = lazy(() => import('pages/home-page/HomePage'));
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
