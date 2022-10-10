import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

import Page from "../../components/page/Page";
import TextField from "../../components/text-field/TextField";
import { UserFormValues, UserModel } from "../../models/user.model";
import { usersService } from "../../services/user.service";
import Button from "../../components/button/Button";

const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserModel>();
  const navigate = useNavigate();

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

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    image: Yup.string().required(),
    badges: Yup.array(),
  });

  const handleSubmit = async (values: UserFormValues) => {
    if (user?.id) {
      await usersService.updateUser(user.id.toString(), values);
    } else {
      await usersService.createUser(values);
    }
    goToUsersPage();
  };

  const goToUsersPage = () => {
    navigate("/users");
  };

  return (
    <Page title={user ? user.name : "User"}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
        enableReinitialize
        validateOnMount
        validateOnChange
      >
        <Form>
          <TextField name="name" label="Name" />
          <TextField name="image" label="Avatar url" />

          <div className="mt-3">
            <Button
              color="secondary"
              type="button"
              className="me-2"
              onClick={goToUsersPage}
            >
              Back
            </Button>
            <Button type="submit">{id ? "Update" : "Create"}</Button>
          </div>
        </Form>
      </Formik>
    </Page>
  );
};

export default UserPage;
