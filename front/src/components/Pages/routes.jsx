// @flow
import React from 'react';
import { Route, Switch } from 'react-router';

import About from 'components/Pages/About/AboutContainer';
import Service from 'components/Pages/Service/ServiceContainer';
import Portfolio from 'components/Pages/Portfolio/PortfolioContainer';
import Blog from 'components/Pages/Blog/BlogContainer';
import Contacts from 'components/Pages/Contacts/ContactsContainer';
import Main from 'components/Pages/Main/MainContainer';
import Page404 from 'components/Pages/Page404/Page404Container';

import routes from 'app/routeScheme';

export default () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/about" component={About} />
    <Route path="/service" component={Service} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/blog" component={Blog} />
    <Route path="/contacts" component={Contacts} />
    <Route component={Page404} />
  </Switch>
);
