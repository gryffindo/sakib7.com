import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";

function Header() {
  return (
    <div>
      <div class="main-menu">
        <div class="main-menu__top">
          <h1 class="top_heading">Sakib</h1>
          <span>Programmer </span>
        </div>
        <div class="main-menu_nav">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
					<Link to='/skills'>My Skills</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/article">Articles</Link>
          <Link to="/awards">Honors and awards</Link>
        </div>
        <p className="email">sakibalhasan17442@gmail.com</p>
      </div>
    </div>
  );
}

export default Header;