// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';
import './styles/header.css';

import NavigationMenu from './NavigationMenu';
import Logo from './Logo';

type Props = {
  screenSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  currentPath: string
};

// $FlowFixMe decorators
@connect(
  state => ({
    screenSize: state.app.get('screenSize'),
    currentPath: state.router.location.pathname
  })
)

export default class Header extends Component<Props> {

  render() {

    const { currentPath, screenSize } = this.props;

    return (
      <Row tag="header" className={`header ${ !currentPath.slice(1) ? 'mainPage' : '' }`}>
        <Logo />
        <NavigationMenu screenSize={screenSize} />
      </Row>
    );
  }
}

