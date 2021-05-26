import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import openModal from "../../actions/openModal";
import Login from "../../pages/Login/Login";
import logoutAction from "../../actions/logoutAction";

import SignUp from "../../pages/Login/SignUp";

function NavBar(props) {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    dispatch(openModal("closed", ""));
  }, [token]);

  let navColor = "transparent";
  if (props.location.pathname !== "/") {
    navColor = "black";
  }

  return (
    <div className="container-fluid nav">
      <div>
        <nav className={navColor}>
          <div className="nav-wrapper">
            <Link to="/" className="left">
              airbnb
            </Link>
            <ul id="nav-mobile" className="right">
              <li>
                <Link to="/">English (US)</Link>
              </li>
              <li>
                <Link to="/">$ USD</Link>
              </li>
              <li>
                <Link to="/">Become a host</Link>
              </li>
              <li>
                <Link to="/">Help</Link>
              </li>
              <li>
                <Link to="/account">Acoount</Link>
              </li>
              {email ? (
                <>
                  <li>Hello,{email} </li>
                  <li onClick={() => dispatch(logoutAction())}>Logout</li>
                </>
              ) : (
                <>
                  <li
                    className="login-signup"
                    onClick={() => {
                      dispatch(openModal("open", <SignUp />));
                    }}
                  >
                    Sign Up
                  </li>
                  <li
                    className="login-signup"
                    onClick={() => dispatch(openModal("open", <Login />))}
                  >
                    Log in
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
