import React from 'react';
import logo from '../assets/img/logo.png';
import Button from './Button';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import SortPopup from './SortPopup';
import { fetchCards } from '../redux/actions/cards';
import { useSelector, useDispatch } from 'react-redux';
import { setSortBy } from '../redux/actions/filters';

function Header() {
  const { totalPrice, totalCount  } = useSelector(({ cart }) => ({
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount
  }));

  return (
    <>
      <header>
        <div className="header-top">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <NavLink to="/">
                  <img src={logo} alt="" />
                </NavLink>
              </div>
              <div className="header-middle">
                <div className="version-line">
                  <div className="burger-icon">
                    <div id="nav-icon">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                  <span>
                    Welcome to the new website. The last version is <a href="#">here</a>
                  </span>
                </div>
                <Navbar />

              </div>
              <div className="header-button">
                <NavLink to="/cart">
  <Button className="top-btn"><span>{totalPrice} btc</span> | <span className="total"></span><span>{totalCount}</span></Button>
                </NavLink>

                
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
