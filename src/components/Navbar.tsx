import { NavLink } from "react-router";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navlink navlink--active" : "navlink"
          }
        >
          Temperature Converter
        </NavLink>

        <NavLink
          to="/employee-directory"
          className={({ isActive }) =>
            isActive ? "navlink navlink--active" : "navlink"
          }
        >
          Team Directory
        </NavLink>

      </div>
    </nav>
  );
}