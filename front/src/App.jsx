import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProopTypes from 'prop-types';
import './App.css';

import Routes from 'components/Pages/routes';
import Header from 'elements/Header/HeaderContainer';
import MainPageHeader from 'elements/Header/MainPageHeaderContainer';
import Footer from 'elements/Footer/FooterContainer';

@connect(
  state => ({
    currentPath: state.router.location.pathname
  })
)

export default class App extends Component {

  render() {

    const { currentPath } = this.props;

    return ([
      (currentPath.split('/')[1] ?
        <Header key="1" /> :
        <MainPageHeader key="1" />),
      <div key="2" className="mainContent">
        <Routes />
      </div>,
      <Footer key="3" />
    ]);
  }

  static propTypes: {
    currentPath: PropTypes.string.isRequired
  }
};

