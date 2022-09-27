import React from "react";
import {Link} from "react-router-dom";


const ErrorPage = () => {
  return <div className="container d-flex justify-content-center">
    <div className="card my-4  p-4 bg-white shadow text-center">
      <h5><b>Error 404! Page not found.:(</b></h5>
      <Link to={'/home'}>
        <button className="btn btn-primary ">
          Homepage
        </button>
      </Link>
    </div>
  </div>
};

export default ErrorPage;