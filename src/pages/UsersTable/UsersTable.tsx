import React, { useCallback, useEffect, useState } from "react";
import { User } from "../../models/user.model";
import { usersService } from "../../services/users.services";

const UsersTable = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await usersService.getUsers());
    };
    fetchUsers();
  }, []);

  
  console.log(users);

  return <div>UsersTable</div>;
};

export default UsersTable;
