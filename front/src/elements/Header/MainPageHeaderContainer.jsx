// @flow
import React, { Component } from 'react';
import './styles/header.css';

import NavigationMenu from './NavigationMenu';
import Logo from './Logo';

export default class MainPageHeader extends Component {
  render() {
    return (
      <div className="header mainPage">
        <Logo />
        <NavigationMenu />
      </div>
    );
  }
}

