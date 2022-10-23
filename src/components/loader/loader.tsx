import classNames from "classnames";
import React from "react";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";

import classes from "./loader.module.scss";


const Loader=()=> {
    
    return (
      <>
        <Backdrop className={classes.backdrop} open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </>
    );
};

export default Loader