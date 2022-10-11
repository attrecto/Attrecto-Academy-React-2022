import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Page from "../../components/page/page";
import UserBadges from "../../components/userbadges/userbadges";
import { BadgeModel } from "../../models/badges.model";
import { badgeServices } from "../../services/badges.service";

import classes from "./Badges.module.scss";
const BadgesPage = () => {
  const [badges, setBadges] = useState<BadgeModel[]>([]);
  useEffect(() => {
    const fetchBadges = async () => {
      setBadges(await badgeServices.getBadges());
      console.log(badges);
    };
    fetchBadges();
  }, []);

  return (
    <Page title="Badges">
      
      <UserBadges badges={badges}>
        
      </UserBadges>
    </Page>
  );
};

export default BadgesPage;
