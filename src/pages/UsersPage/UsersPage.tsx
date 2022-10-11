import classNames from "classnames";
import React, { useCallback, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import Page from "../../components/page/page";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "../../models/user.model";
import { usersService } from "../../services/users.services";

import classes from "./users.module.scss";
const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await usersService.getUsers());
    };
    fetchUsers();
  }, []);

  const fetchUsers = useCallback(async () => {
    setUsers(await usersService.getUsers());
  }, []);
  console.log(users);

  const handleDeleteUser = async (id: string) => {
    await usersService.deleteUser(id);
    fetchUsers();
  };
  const goToUSerPage = () => {
    navigate("/user");
  };

  return (
    <Page title="Users">
      <div>UsersPage</div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Button className="w-100 mb-3" onClick={goToUSerPage}>
            Create User
          </Button>
        </div>
      </div>
      <div className="row">
        {users.map(({ id, image, name }) => (
          <div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3 my-1">
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
          </div>
        ))}
      </div>
    </Page>
  );
};

export default UsersPage;
