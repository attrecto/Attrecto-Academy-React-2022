import { FC } from "react";
import classNames from "classnames";
import { Outlet, Link, NavLink } from "react-router-dom";
// import {"./Navbar.scss"};

import classes from "./Navbar.module.scss";

interface RouteConfig {
  link: string;
  label: string;
}

const Navbar: FC = () => {
  const routes: RouteConfig[] = [
    { label: "Home", link: "/home" },
    { label: "Users", link: "/users" },
    { label: "Badges", link: "/badges" },
  ];
  return (
    <nav
      className={classNames("navbar p-3", "navbar-expand-sm", [classes.Navbar])}
    >
      <div className="d-flex align-items-center justify-content-between flex-grow-1">
        <div className="d-flex">
          {routes.map(({ link, label }) => (
            <NavLink key={link} to={link} className="nav-link me-4">
              {label}
            </NavLink>
          ))}
        </div>
        Welcome to Attrecto
      </div>
      {/* 
      <div className="ps-3 px-2 ">Welcome to Attrecto Academy</div>

      <div className="navbar-nav">
        <Link className="nav-item nav-link active" to="home">
          Home
        </Link>
        <Link className="nav-item nav-link active" to="users">
          Users
        </Link>
        <Link className="nav-item nav-link active" to="badges">
          Badges
        </Link>
      </div> */}
    </nav>
  );
};

export default Navbar;
