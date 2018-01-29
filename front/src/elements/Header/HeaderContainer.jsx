// @flow
import React, { Component } from 'react';
import { Col } from 'reactstrap';
import './styles/header.css';

import NavigationMenu from './NavigationMenu';
import Logo from './Logo';

export default class Header extends Component {
  render() {
    return (
      <Col col="12">
        <header className="header">
          <Logo />
          <NavigationMenu />
        </header>
      </Col>
    );
  }
}

