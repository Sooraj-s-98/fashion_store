import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import { HiShoppingCart } from 'react-icons/hi';
import { RiAccountPinBoxLine } from 'react-icons/ri';

const Navbar = () => (
  <nav className="navbar">
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/products"
    >
      Products
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/contacts"
    >
      Contacts
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/Mens"
    >
      Mens
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/Women"
    >
      Women
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/kids"
    >
      Kids
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/Myaccount"
    >
      <RiAccountPinBoxLine />
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/Cart"
    >
      <HiShoppingCart />
    </NavLink>
  </nav>
);

export default Navbar;
