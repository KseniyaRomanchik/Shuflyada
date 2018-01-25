import React from 'react';
import SocialButtons from './SocialButtons';
import Phones from './Phones';

export default () => (
  <div className="logo">
    <img src="/images/Logo.png" alt="" />
    <span className="slogan">
      Удобная мебель - легкая жизнь
    </span>
    <Phones />
    <SocialButtons />
  </div>
);
