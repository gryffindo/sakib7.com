import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.scss";
import {useState} from 'react'
import {SidebarData} from './SidebarData'

function Header() {
	const[sidebar, setSidebar] = useState(false)

	const showSidebar = () => setSidebar(!sidebar)
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
          <Link to="/skills">My Skills</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/article">Articles</Link>
          <Link to="/awards">Honors and awards</Link>
        </div>
        <p className="email">sakibalhasan17442@gmail.com</p>
      </div>
      <div className="small-header">
        <h1 className="small">Sakib</h1>
        <div className="toggle" onClick={showSidebar}></div>
				<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
				<ul className='nav-menu-items' onClick={showSidebar}>
					<li className="navbar-toggle">
					</li>
					{SidebarData.map((item, index) => {
						return (
							<li key={index} className={item.cName}>
								<Link to={item.path}>
									<span>{item.title}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</nav>
      </div>
    </div>
  );
}

export default Header;
