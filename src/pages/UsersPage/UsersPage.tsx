import { useEffect, useState, useCallback } from "react";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../components/button/Button";
import Page from "../../components/page/Page";
import { UserModel } from "../../models/user.model";
import { usersService } from "../../services/user.service";

import classes from "./UsersPage.module.scss";

const UsersPage = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [tableView, setTableView] = useState<Boolean>(false);
  const navigate = useNavigate();

  const fetchUsers = useCallback(async () => {
    setUsers(await usersService.getUsers());
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await usersService.getUsers());
    };
    fetchUsers();
  }, []);

  const goToUserPage = () => {
    navigate("/user");
  };

  const handleDeleteUser = async (id: string) => {
    await usersService.deleteUser(id);
    fetchUsers();
  };

  const drawCardView = ({ id, image, name} : {id : number, image: string, name: string}) => {
    return(<div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3 my-1">
      <Link
        to={`/user/${id}`}
        className={classNames("card", classes.UserCard)}
      >
        <img
          src={image}
          alt={`user #${id}`}
          className={classNames(classes.UserImage, "card-img-top")}
        />
        <div className="card-body">
          <h5>{name}</h5>
        </div>
        <Button
          className={classes.DeleteIcon}
          onClick={(e) => {
            e.preventDefault();
            handleDeleteUser(id.toString());
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </Link>
    </div>)
  }

  const drawTableView = ({ id, image, name} : {id : number, image: string, name: string}) => {
    return(<tr className={classNames(classes.UserListItem)}
      onClick={(() =>{navigate(`/user/${id}`)})}
      >      
       <td>       
        <img
          src={image}
          alt={`user #${id}`}
          className={classNames(classes.UserListImage)}
        />
        </td>
        <td className={classNames(classes.UserListText)}>
          <h5>{name}</h5>
        </td>
        <td className={classNames(classes.UserListDeleteBtn)}>
        <Button
          className={classes.DeleteIcon}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleDeleteUser(id.toString());
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>

    </tr>)
  }

  return (
    <Page title="Users">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">       
          <Button className="w-100 mb-3" onClick={goToUserPage}>
            Create User
          </Button>     
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 offset-md-4 offset-lg-6">
          <Button color="secondary" className="w-100 mb-3" onClick={() => {setTableView(!tableView)}}>Change View</Button>
        </div>
      </div>
      <div className="row">
        {tableView ? <table className="table"><thead><tr>
           <th>Avatar</th><th>Full Name</th><th style={{textAlign: "right"}}>Delete</th>
          </tr></thead><tbody>{users.map((user) => drawTableView(user))}</tbody></table> : users.map((user) => drawCardView(user))}
      </div>
    </Page>
  );
};

export default UsersPage;
