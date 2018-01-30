// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col } from 'reactstrap';

import SocialButtons from './SocialButtons';
import Phones from './Phones';

export default () => {
  return (
    <Col xs="12" lg="4" className="logo">
      <NavLink to="/">
        <img src="/images/Logo.png" alt="" />
      </NavLink>
      <span className="slogan">
        Удобная мебель - легкая жизнь
      </span>
      <Phones />
      <SocialButtons />
    </Col>
  );
};
