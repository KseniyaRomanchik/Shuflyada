// @flow
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';

import routes from 'app/routeScheme';

type Props = {

}

type State = {

};

export default class NavigationMenu extends Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = this.initialState;

    this.initialState = routes.reduce((routes, route) => {

      if (route.subMenu) {
        routes[route.route] = false;
      }
    }, {});
  }

  setDropDownOpened(routeName: string) {
    this.setState({

    })
  }

  render() {
    return (
      <Nav className="menu" justified={true} navbar={true}>
        {
          routes.map(menuItem => (
            <NavItem key={menuItem.name}>
              {
                menuItem.subMenu ?
                  <Dropdown nav isOpen={this.state[menuItem.route]}>
                    <DropdownToggle nav caret toggle={this.setDropDownOpened.bind(this, menuItem.route)}>
                      Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                      {
                        menuItem.subMenu.map(subItem => (
                          <DropdownItem key={subItem.name}>
                            <NavLink to={`/${ menuItem.route }/${ subItem.route }`} activeClassName="active" >
                              { subItem.name }
                            </NavLink>
                          </DropdownItem>
                        ))
                      }
                    </DropdownMenu>
                  </Dropdown> :
                  <NavLink to={`/${ menuItem.route }`} activeClassName="active" >
                    { menuItem.name }
                  </NavLink>
              }
            </NavItem>
          ))
        }
      </Nav>
    );
  }
};

