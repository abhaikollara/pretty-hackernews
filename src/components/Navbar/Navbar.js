import React from "react";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a
        className="navbar-brand"
        href="#"
        id="top"
        onClick={props.clickHandler}
      >
        HackerNews
      </a>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={props.clickHandler}
              id="top"
            >
              Top
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={props.clickHandler}
              id="new"
            >
              New
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={props.clickHandler}
              id="best"
            >
              Best
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={props.clickHandler}
              id="show"
            >
              Show
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={props.clickHandler}
              id="ask"
            >
              Ask
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
