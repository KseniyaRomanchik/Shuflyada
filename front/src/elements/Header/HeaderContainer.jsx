import React from 'react';
import './styles/header.css';

import NavigationMenu from './NavigationMenu';
import Logo from './Logo';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Logo />
        <NavigationMenu />
      </header>
    );
  }
}

