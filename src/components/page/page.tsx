import { ReactNode } from "react";
import classNames from "classnames";

interface Pageprops {
  title?: string;
  noCard?: boolean;
  children: ReactNode;
}

const Page = ({ children, noCard, title }: Pageprops) => {
  return (
    <div className="conatiner pt-r">
      {title ? <h5>{title}</h5> : null}
      <div className={classNames({ "card bg-white shadow p3": !noCard })}>
        {children}
      </div>
    </div>
  );
};

export default Page;
