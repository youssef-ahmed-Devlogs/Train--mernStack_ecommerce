import React from "react";
import "../../css/Header/Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <a href="#" className="brand">
            SOUQ
          </a>

          <ul className="links-list">
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">Orders</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
