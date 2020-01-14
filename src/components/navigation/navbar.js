import React from "react";


import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

  const handleSignOut = () => {

    props.history.push('/')
    props.handleSuccessfulLogout()
  };

  return (
    <div className='nav-bar'>
        <div className='link-wrapper'>
            <NavLink to='/' activeClassName="nav-link-active">
                Home
            </NavLink>
            <NavLink to='/about' activeClassName="nav-link-active">
                About
            </NavLink>
        </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
