import { useEffect, useState } from "react";
import { Formik } from "formik";
import { useParams } from "react-router-dom";

import Page from "../../components/page/Page";
import { UserFormValues, UserModel } from "../../models/user.model";
import { usersService } from "../../services/user.service";

const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserModel>();

  useEffect(() => {
    const fetchUser = async (id: string) =>
      setUser(await usersService.getUser(id));
    if (id) {
      fetchUser(id);
    }
  }, [id]);

  const initialValues: UserFormValues = {
    name: user?.name || "",
    image: user?.image || "",
    badges: user?.badges || [],
  };

  const handleSubmit = (values: UserFormValues) => {
    console.log("form values", values);
  };

  return (
    <Page title={user ? user.name : "User"}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}></Formik>
    </Page>
  );
};

export default UserPage;
