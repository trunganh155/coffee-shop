import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "~/components/button/Button";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <div className="logo">
              <Link to="/">
                <img
                  src="https://neighborscoffeeroasters.com/wp-content/uploads/2017/08/header-logo.png"
                  alt=""
                />
              </Link>
            </div>
            <nav className="navigation">
              <NavLink className="link" to="/menu">
                menu
              </NavLink>
              <NavLink className="link" to="/rewards">
                rewards
              </NavLink>
              <NavLink className="link" to="/gift-cards">
                gitf cards
              </NavLink>
            </nav>
          </div>
          <div className="header-right">
            <div className="cart">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </span>
              <span className="number">2</span>
            </div>
            <div className="signin">
              <Button to="/login">Sign in</Button>
            </div>
            <div className="join-now">
              <Button to="/register" secondary>
                Join now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
