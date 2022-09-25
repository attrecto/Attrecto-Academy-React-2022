import classNames from "classnames";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";

}

const Button = ({color="primary",children, className, ...props}: ButtonProps) => { //A ...props ami hátra marad. 
  return (
    <button
      className={classNames("btn", {
        "btn-primary": color === "primary",
        "btn-scondary": color === "secondary",
        "btn-danger": color === "danger"

      },className)}
      {...props} // A többi propertyt kiteríti. Így az összes klasszikus html button használható propot kiterjeszti
    >
      {children}
    </button>
  );
};

export default Button;
