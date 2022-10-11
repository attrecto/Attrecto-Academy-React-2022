import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { NavigateProps,useNavigate, useParams } from "react-router-dom";
import Page from "../../components/page/page";

import { UserFormValues, User } from "../../models/user.model";
import { usersService } from "../../services/users.services";
import * as Yup from "yup";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/button/button";

const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User>();
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

  const handleSubmit = async (values: UserFormValues) => {
    if(user?.id){
      await usersService.updateUSer(user.id.toString(), values);
    }else{
      await usersService.createUser(values);
      
    }
    goToUSersPage();
  };


  const schema =Yup.object().shape(
  {
    name: Yup.string().required(),
    image: Yup.string().required(),
    badges: Yup.array()
  }
  );
  const goToUSersPage = () => {
    navigate("/users");
  };
  return (
    <Page title={user ? user.name : "User"}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}
      enableReinitialize
      validationSchema={schema}
      validateOnMount
      validateOnChange
      >
        <Form>
          <TextField name="name" label="Name" />
          <TextField name="image" label="Avatar url" />
          <div className="mt-3">
            <Button color="secondary" type="button" className="me-2"  onClick={goToUSersPage}>
              Back
            </Button>
            <Button color="primary" type="submit" className="me-2">
              {id ? "Update" : "Crreate"}
            </Button>
          </div>
        </Form>
      </Formik>
    </Page>
  );
};

export default UserPage;
