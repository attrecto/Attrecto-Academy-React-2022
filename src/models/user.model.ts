export interface UserBadgeModel {
  id: number;
}

export interface UserModel {
  name: string;
  id: number;
  createAte: Date;
  image: string;
  badges: UserBadgeModel[];
}
