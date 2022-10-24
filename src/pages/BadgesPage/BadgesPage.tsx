import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Page from "../../components/page/page";
import UserBadges from "../../components/userbadges/userbadges";
import { BadgeModel } from "../../models/badges.model";
import { badgeServices } from "../../services/badges.service";

import classes from "./Badges.module.scss";
const BadgesPage = () => {
  const [badges, setBadges] = useState<BadgeModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const setLoading=(newValue:boolean)=> {
    setIsLoading(newValue);
  };
  useEffect(() => {
    setLoading(true);
    const fetchBadges = async () => {

      setBadges(await badgeServices.getBadges());
      setLoading(false);
      console.log(badges);
    };
    fetchBadges();
  }, []);

  return (
    <Page title="Badges" isLoading={isLoading}>
      
      <UserBadges badges={badges}>
        
      </UserBadges>
    </Page>
  );
};

export default BadgesPage;
