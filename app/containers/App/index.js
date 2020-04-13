/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import AboutPage from 'containers/AboutPage/Loadable';
import ExamplePage from 'containers/ExamplePage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import ServicesPage from 'containers/ServicesPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  /* max-width: calc(768px + 16px * 2); */
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  /* padding: 0 16px; */
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  padding: 0 16px;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="Chuck's Auto Repair Service - %s"
        defaultTitle="Chuck's Auto Repair Service"
      >
        <meta
          name="description"
          content="Chuck's Auto Repair Service - Pittsburgh, PA"
        />
      </Helmet>
      <Header />
      <ContentWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/example" component={ExamplePage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </ContentWrapper>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
