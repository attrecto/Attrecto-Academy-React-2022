import { useEffect, useState } from "react";
import classNames from "classnames";

import Page from "../../components/page/Page";
import { BadgeModel } from "../../models/badges.model";
import { badgeService } from "../../services/badges.service";
import Badge from "../../components/badge/Badge";

import classes from "./Badges.module.scss";

const BadgesPage = () => {
  const [badges, setBadges] = useState<BadgeModel[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchBadges = async () => {
      setBadges(await badgeService.getBadges());
      setLoading(false);
    };

    fetchBadges();
  }, []);

  return (
    <Page title="Badges" loading={loading}>
      <div className="row">
        {badges.map((badge) => (
          <div key={badge.id} className="col-lg-4 col-md-6 col-sm-12">
            <Badge badge={badge} />
          </div>
        ))}
      </div>
    </Page>
  );
};

export default BadgesPage;
