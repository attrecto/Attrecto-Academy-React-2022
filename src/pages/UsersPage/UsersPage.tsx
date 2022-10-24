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

    const [View, setView] = useState(true);

    const viewChange = (newView: boolean) => {
        setView(newView);
    };

    return (
            <Page title="Users">
                <div className="row">
                    <div className="w-50 col-12 col-sm-6 col-md-4 col-lg-3">
                        <Button className="mb-3" onClick={goToUserPage}>
                            Create User
                        </Button>
                    </div>
                    <div className="w-50 col-12 col-sm-6 col-md-4 col-lg-3">
                        <Button className="float-end" onClick={() => viewChange(true)}>
                            Card View
                        </Button>
                        <Button className="float-end" onClick={() => viewChange(false)}>
                            Table View
                        </Button>
                    </div>
                </div>
                <div className="row">
                    {users.map(({id, image, name}) => (
                        View ?
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
                                    <FontAwesomeIcon icon={faTrash}/>
                                </Button>
                            </Link>
                        </div>
                            :
                            <div key={id} className="w-100 col-12 col-sm-6 col-md-4 col-lg-3 my-1">
                                <Link
                                    to={`/user/${id}`}
                                    className={classNames("card", classes.TableUser)}
                                >
                                    <div className="TableUserImage">
                                        <img
                                            src={image}
                                            alt={`user #${id}`}
                                            className={classNames(classes.TableUserImage)}
                                        />
                                    </div>
                                <div className={classNames(classes.TableName)}>
                                    <h5>{name}</h5>
                                </div>
                                <Button
                                    className={classes.DeleteIcon}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleDeleteUser(id.toString());
                                    }}
                                >
                                    <FontAwesomeIcon icon={faTrash}/>
                                </Button>
                                </Link>
                            </div>
                    ))}
                </div>
            </Page>
        );
    };

export default UsersPage;
