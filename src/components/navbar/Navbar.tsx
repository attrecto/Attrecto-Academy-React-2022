import { FC } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.scss";
import "./Navbar.scss";

interface RouteConfig {
  link: string;
  label: string;
}

const Navbar: FC = () => {
  const routes: RouteConfig[] = [
    { label: "Home", link: "/home" },
    { link: "/users", label: "Users" },
    { link: "/badges", label: "Badges" },
  ];

  return (
    <nav className={classNames("navbar p-3", [classes.Navbar])}>
      <div className="d-flex align-items-center justify-content-between flex-grow-1 flex-wrap">
        <div className="d-flex">
          {routes.map(({ link, label }) => (
            <NavLink key={link} to={link} className="nav-link me-4">
              {label}
            </NavLink>
          ))}
        </div>
        Welcome to Attrecto Academy
      </div>
    </nav>
  );
};

export default Navbar;
