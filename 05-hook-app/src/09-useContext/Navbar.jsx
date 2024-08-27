import { Link, NavLink } from "react-router-dom";
import { dataNavbar } from "./utils/dataNavbar";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          UseContext
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {dataNavbar.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
