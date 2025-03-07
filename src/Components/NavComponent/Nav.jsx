import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./Nav.scss";

export const Navbar = () => {
  return (
    <>
      <nav id="nav-section">
        <ul className="Login">
          <li>
            <NavLink to={"/"}>List Users</NavLink>
          </li>
          <li>
            <NavLink to={"create/user"}>Create User</NavLink>
          </li>

          <li id="logo-container">
            <NavLink to="/">
              <img src="" alt="" />{" "}
            </NavLink>
          </li>
        </ul>
        <ul id="link-right">
          <li>
            <Link to="/login">
              Log In{" "}
              <img
                src="../../src/assets/images/AccountLogo.svg"
                alt="Account logo"
              />
            </Link>
          </li>
          <li>
            <Link to="#">
              Basket{" "}
              <img src="../../src/assets/images/CartLogo.svg" alt="Cart Logo" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
