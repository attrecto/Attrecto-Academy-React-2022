import { User, UserFormValues } from "../models/user.model";
import request, { Methods } from "../util/request";

class UsersService {
   async getUsers() {
      return request<User[]
      >({ method: Methods.GET, resource: "users" });
   }


  async getUser(id: string) {
    return request<User>({ resource: `users/${id}`, method: Methods.GET });
  }

  async updateUSer(id:string, data:UserFormValues) {
   return request<User>({ method: Methods.PATCH, data, resource:`users/${id}` });

 }
 async createUser(data:UserFormValues) {
   return request<User>({ method: Methods.POST, data, resource:`users` });

 }

 async deleteUser(id:string) {
   return request<User>({ method: Methods.DELETE, resource: `users/${id}`});

 }
   // Az REST nél az erőforrásoknál nem adjuk meg mit szeretnénk csinálni, azt a method-al adjuk meg.
}
export const usersService = new UsersService();