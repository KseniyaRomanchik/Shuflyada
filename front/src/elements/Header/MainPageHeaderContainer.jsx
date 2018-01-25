import React from 'react';
import './header.css';

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

