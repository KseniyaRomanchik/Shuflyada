// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import { setScreenSize } from 'actions/AppActions';

import Routes from 'components/Pages/routes';
import Header from 'elements/Header/HeaderContainer';
import Footer from 'elements/Footer/FooterContainer';

import './App.css';

type Props = {
  currentPath: string,
  setScreenSize: Function
};

// $FlowFixMe decorators
@connect(
  null,
  dispatch => ({
    setScreenSize: () => dispatch(setScreenSize())
  })
)

export default class App extends Component<Props> {

  componentWillMount() {

    const { setScreenSize } = this.props;

    setScreenSize();
  }

  render() {

    return (
      <Container fluid={true} className="mainContent">
        <Header />
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

