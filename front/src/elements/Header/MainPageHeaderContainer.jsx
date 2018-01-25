import React from 'react';
import './styles/header.css';

import NavigationMenu from './NavigationMenu';
import Logo from './Logo';

export default class MainPageHeader extends React.Component {
  render() {
    return (
      <div className="header mainPage">
        <Logo />
        <NavigationMenu />
      </div>
    );
  }
}

