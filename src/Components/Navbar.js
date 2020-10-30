import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/about', label: 'About' },
  { to: '/view', label: 'View' },
  { to: '/FAQ', label: 'FAQ' },
  { to: '/news', label: 'News' },
  { to: '/contacts', label: 'Contacts' },
];

class Navbar extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={`${link}_${index}`}>
          <NavLink to={link.to}>{link.label}</NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <>
        <nav className="menu">
          <ul className="menu__list">{this.renderLinks()}</ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
