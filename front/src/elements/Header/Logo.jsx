// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';

import SocialButtons from './SocialButtons';
import Phones from './Phones';

export default () => {

  return (
    <div className="logo">
      <NavLink to="/">
        <img src="/images/Logo.png" alt="" />
      </NavLink>
      <span className="slogan">
        Удобная мебель - легкая жизнь
      </span>
      <Phones />
      <SocialButtons />
    </div>
  );
};
