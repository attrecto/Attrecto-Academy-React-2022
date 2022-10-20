import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { NavigateProps, useNavigate, useParams } from "react-router-dom";
import Page from "../../components/page/page";

import { UserFormValues, User, UserBadgeModel } from "../../models/user.model";
import { usersService } from "../../services/users.services";
import * as Yup from "yup";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/button/button";
import TagField from "../../components/tagField/tagField";
import { BadgeModel } from "../../models/badges.model";
import { badgeServices } from "../../services/badges.service";

const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User>();
  const [badges, setBadges] = useState<BadgeModel[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async (id: string) =>
      setUser(await usersService.getUser(id));
    if (id) {
      fetchUser(id);
    }
  }, [id]);

  useEffect(() => {
    const fetchBadges = async () => {
      setBadges(await badgeServices.getBadges());
    };
    fetchBadges();
  }, []);

  const initialValues: UserFormValues = {
    name: user?.name || "",
    image: user?.image || "",
    badges: user?.badges || [],
  };

  const handleSubmit = async (values: UserFormValues) => {
    if (user?.id) {
      await usersService.updateUSer(user.id.toString(), values);
    } else {
      await usersService.createUser(values);
    }
    goToUSersPage();
  };

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    image: Yup.string().required(),
    badges: Yup.array(),
  });

  const goToUSersPage = () => {
    navigate("/users");
  };

  
  return (
    <Page title={user ? user.name : "User"}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
        validationSchema={schema}
        validateOnMount
        validateOnChange
      >
        <Form>
          <TextField name="name" label="Name" />
          <TextField name="image" label="Avatar url" />
          <TagField
            name="badges"
            label="Badges"
            options={badges}
            getLabel={({ name }) => name}
          />
          <div className="mt-3">
            <Button
              color="secondary"
              type="button"
              className="me-2"
              onClick={goToUSersPage}
            >
              Back
            </Button>
            <Button color="primary" type="submit" className="me-2">
              {id ? "Update" : "Create"}
            </Button>
            
          </div>
        </Form>
      </Formik>
    </Page>
  );
};

export default UserPage;
