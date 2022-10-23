import { ReactNode} from "react";
import classNames from "classnames";
import Loader from "../loader/Loader";

interface PageProps {
  title?: string;
  noCard?: boolean;
  loading?: boolean;
  children: ReactNode;
}


const Page = ({ children, noCard, title, loading}: PageProps) => {

  return (
    <div className="container pt-3">
      {title ? <h5>{title}</h5> : null}
      <div className={classNames({ "card bg-white shadow p-3": !noCard })}>
        {children}
        {loading ? <Loader display={loading}/>: <></>}
      </div>
    </div>
  );
};

export default Page;
