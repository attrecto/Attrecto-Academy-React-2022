import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";

const NotFoundPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bolder">404</h1>
        <p className="fs-3">
          <span className="text-danger">Ohh no!</span> You're beyond the
          borders!
        </p>
        <p className="lead">
          It looks like you reached an URL that does not exist.
        </p>

        <Link to="/home">
          <Button color="secondary" className="">
            Back to home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
