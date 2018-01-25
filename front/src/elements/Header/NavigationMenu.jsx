import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <nav className="menu">
    <NavLink to="/about" activeClassName="active" >
      <span>
        О нас
      </span>
    </NavLink>
    <NavLink to="/service" activeClassName="active" >
      <span>
        Сервис и гарантия
      </span>
    </NavLink>
    <NavLink to="/portfolio" activeClassName="active" >
      <span>
        Порфолио
      </span>
    </NavLink>
    <NavLink to="/blog" activeClassName="active" >
      <span>
        Блог
      </span>
    </NavLink>
    <NavLink to="/contacts" activeClassName="active" >
      <span>
        Контакты
      </span>
    </NavLink>
  </nav>
);
