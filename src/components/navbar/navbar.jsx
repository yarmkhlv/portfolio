import { NavLink } from "react-router-dom";

import { BtnDarkMode } from "../btn_dark_mode/btn_dark_mode";

import "./navbar.css";

function Navbar() {
  const activeLink = "nav-list__link nav-list__link--active";
  const defaultLink = "nav-list__link";
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <span>My</span> portfolio
          </NavLink>
          <BtnDarkMode />
          <ul className="nav-list">
            <li className="nav-list__el">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : defaultLink
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__el">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : defaultLink
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list__el">
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : defaultLink
                }
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
