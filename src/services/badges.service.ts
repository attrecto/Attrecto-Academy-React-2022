import { BadgeModel } from "../models/badges.model";
import request, { Methods } from "../util/request";

class BadgesService {
   async getBadges() {
    return request<BadgeModel[]
    >({method: Methods.GET, resource: "badges"});
   }
}
export const badgeServices = new BadgesService();