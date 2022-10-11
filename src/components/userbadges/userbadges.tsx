import classNames from "classnames";
import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { BadgeModel } from "../../models/badges.model";
import classes from "../../pages/BadgesPage/Badges.module.scss";

interface UserBadgesProps {
  children: ReactNode;
  badges: BadgeModel[];
}

const UserBadges = ({ badges }: UserBadgesProps) => {
  //A ...props ami hátra marad.
  return (
    <div className="row">
    {  badges.length==0 && <div>There is no badge</div> }
      {badges?.map(({ id, image, name, description }) => (
        <div key={id} className="col-lg-4 col-md-6 col-sm-12">
          <div
            className={classNames(
              "d-flex box-shadow align-items-center",
              classes.Badge
            )}
          >
            <div
              className={classes.BadgeImage}
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="d-flex flex-column">
              <h5 className="ms-3">{name}</h5>
              <p className="ms-3 text-black-50">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserBadges;
