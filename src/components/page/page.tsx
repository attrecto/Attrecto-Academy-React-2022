import { ReactNode, useState } from "react";
import classNames from "classnames";
import Loader from "../loader/loader";

interface Pageprops {
  title?: string;
  noCard?: boolean;
  children: ReactNode;
  isLoading?: boolean;
}

const Page = ({ children, noCard, title, isLoading }: Pageprops) => {
 
  return (
    <div className="conatiner pt-r">
      {title ? <h5>{title}</h5> : null}
      {isLoading &&<Loader></Loader> }
      
      <div className={classNames({ "card bg-white shadow p3": !noCard })}>
        {children}
      </div>
    </div>
  );
};

export default Page;
