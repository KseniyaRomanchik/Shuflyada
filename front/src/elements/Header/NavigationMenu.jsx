// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Nav, NavItem, UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import PropTypes from 'prop-types';

import routes from 'app/routeScheme';

const NavigationMenu = ({ screenSize }) => (
  <Col xs="12" lg="8">
    <Nav tag="nav" className="menu" navbar={
      screenSize === 'xs' ||
      screenSize === 'sm' ||
      screenSize === 'md'
    }>
      {
        routes.map(menuItem => (
          menuItem.subMenu ?
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                <span>{ menuItem.name }</span>
              </DropdownToggle>
              <DropdownMenu>
                {
                  menuItem.subMenu.map(subItem => (
                    <DropdownItem key={subItem.name}>
                      <NavLink
                        to={`/${ menuItem.route }/${ subItem.route }`}
                        activeClassName="active"
                      >
                        <span>{ subItem.name }</span>
                      </NavLink>
                    </DropdownItem>
                  ))
                }
              </DropdownMenu>
            </UncontrolledDropdown> :
            <NavItem key={menuItem.name}>
              <NavLink
                to={`/${ menuItem.route }`}
                activeClassName="active"
                className="nav-link"
              >
                <span>{ menuItem.name }</span>
              </NavLink>
            </NavItem>
        ))
      }
    </Nav>
  </Col>
);

NavigationMenu.propTypes = {
  screenSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

export default NavigationMenu;

