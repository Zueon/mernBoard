import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
      <div className="container">
        <div className="navbar-brand">My Website</div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/posts" className="nav-link">
                Board
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
