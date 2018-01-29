// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import Routes from 'components/Pages/routes';
import Header from 'elements/Header/HeaderContainer';
import MainPageHeader from 'elements/Header/MainPageHeaderContainer';
import Footer from 'elements/Footer/FooterContainer';

import './App.css';

type Props = {
  currentPath: string
};

@connect(state => ({
  currentPath: state.router.location.pathname
}))

export default class App extends Component<Props> {

  render() {

    const { currentPath } = this.props;

    return (
      <Container fluid={true} className="mainContent">
        <Row>
          {
            currentPath.split('/')[1] ?
              <Header /> :
              <MainPageHeader />
          }
        </Row>
        <Row>
          <Col md="12">
            <Routes />
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    );
  }
}

Container.propTypes = {
  fluid: PropTypes.bool
};

