export interface UserBadgeModel{
    id: number;
}

export interface User{
    name: string;
    id: number;
    createAt: Date;
    image: string;
    badges: UserBadgeModel [];
}


export interface UserFormValues extends Omit<User, "id" | "createAt"> {}