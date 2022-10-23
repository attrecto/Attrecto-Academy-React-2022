import classNames from 'classnames';

interface LoaderProps {
    display: Boolean;
    color?: "primary" | "secondary" | "light" | "dark";
}

const Loader = ({color = "primary", display}: LoaderProps) => {
  return (
    display ? 
    <div className="d-flex justify-content-center">
        <div  className={classNames(
            "spinner-border",
            {
            "text-primary": color === "primary",
            "text-secondary": color === "secondary",
            "text-light": color === "light",
            "text-dark": color === "dark",
            }
        )}  role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>
    : <></>
  )
}

export default Loader