import classNames from "classnames";
import React, { useCallback, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import Page from "../../components/page/page";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User, UserBadgeModel } from "../../models/user.model";
import { usersService } from "../../services/users.services";
import { Tabs, Tab } from "@material-ui/core";
import MaterialTable from "material-table";

import classes from "./users.module.scss";
import { BadgeModel } from "../../models/badges.model";
import { badgeServices } from "../../services/badges.service";
import UserBadges from "../../components/userbadges/userbadges";
const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const navigate = useNavigate();
  const [badges, setBadges] = useState<BadgeModel[]>([]);

  useEffect(() => {
    const fetchBadges = async () => {
      setBadges(await badgeServices.getBadges());
      console.log(badges);
    };
    fetchBadges();
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

  const goToUSerPage = (id?: string) => {
    console.log("Asd");
    if (id) {
      navigate(`/user/${id}`);
    } else {
      navigate("/user");
    }
  };

  const columns = [
    { title: "Name", field: "name" },
    {
      title: "Create at",
      field: "createdAt",
      filtering: false,
      render: (rowData: User) => new Date(rowData.createdAt).toLocaleString(),
    },
  ];
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
    console.log(newValue);
  };
  const filterUserBadges = (userBadgesIds: UserBadgeModel[]): BadgeModel[] => {
    let userBadges = [] as BadgeModel[];
    userBadgesIds.forEach((b_Ids) => {
      let f_badge = badges.find((b) => b.id === b_Ids.id);
      if (f_badge) {
        userBadges.push(f_badge);
      }
    });
    return userBadges;
  };

  return (
    <Page title="Users">
      <div className="row justify-content-end">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 m-3 ">
          <Button className="w-100 mb-3" onClick={() => goToUSerPage()}>
            Create User
          </Button>
        </div>
      </div>
      <Tabs value={selectedTab} onChange={handleChange}>
        <Tab value={0} label="Tile" />
        <Tab value={1} label="Table" />
      </Tabs>
      {selectedTab === 0 && (
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
      )}
      {selectedTab === 1 && (
        <div>
          <MaterialTable
            title=""
            data={users}
            columns={columns}
            options={{
              paging: false,
              search: false,
              filtering: true,
              toolbar: false,
            }}
            actions={[
              {
                icon: "delete",
                tooltip: "Delete User",
                onClick: (event, rowData: User | User[]) => {
                  if ("id" in rowData) {
                    handleDeleteUser(rowData.id.toString());
                  }
                },
              },
              {
                icon: "edit",
                tooltip: "Edit User",
                onClick: (event, rowData) => {
                  if ("id" in rowData) {
                    goToUSerPage(rowData.id.toString());
                  }
                },
              },
            ]}
            detailPanel={(rowData) => {
              return (
                <div>
                  {rowData.badges && 
                  <UserBadges
                     badges={filterUserBadges(rowData.badges)}                   
                  >
                  </UserBadges>
                  }
                </div>
              );
            }}
          />
        </div>
      )}
    </Page>
  );
};

export default UsersPage;
