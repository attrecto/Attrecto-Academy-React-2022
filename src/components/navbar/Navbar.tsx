import { FC } from "react";
import classNames from "classnames";
import { Outlet, Link } from "react-router-dom";

import classes from "./Navbar.module.scss";

const Navbar: FC = () => {
  return (
    <nav className={classNames("navbar", "navbar-expand-sm", [classes.Navbar])}>
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
      </div>
    </nav>
  );
};

export default Navbar;
