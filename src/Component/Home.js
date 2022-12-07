import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBTabs,
  MDBCheckbox,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
} from "mdb-react-ui-kit";

import { useFormik } from "formik";
import * as yup from "yup";
import YupPassword from "yup-password";
import { TextField } from "@mui/material";
YupPassword(yup);
const formValidationschema = yup.object({
  email: yup.string().min(10, "err").required("this is"),
  password: yup
    .string()
    .password()
    .minLowercase(2)
    .min(
      8,
      "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("this is"),
});

function Home() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };
  const navigate = useNavigate();

  const { handleChange, handleBlur, errors, touched, values, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: formValidationschema,
      onSubmit: (values) => {
        oldlist(values);
      },
    });
  const oldlist = async (values) => {
    try {
      await fetch(`${process.env.REACT_APP_BASE_URL}/auths`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }).then((res) => {
        if (res.status === 200) {
          window.alert("successfull login");
          navigate("/dashboard");
        } else {
          console.log(res.status);
          window.alert("email or password incorrect");
        }
      });
    } catch (err) {
      console.log("error");
    }
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => navigate("/")}
            active={justifyActive === "tab2"}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <form onSubmit={handleSubmit}>
        <MDBTabsContent>
          <MDBTabsPane className="col-sm-6" show={justifyActive === "tab1"}>
            <TextField
              className="t1"
              name="email"
              label="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              type="email"
              placeholder="email"
              error={errors.email && touched.email}
              helperText={errors.email && touched.email ? errors.email : ""}
            />{" "}
            &nbsp;
            <TextField
              className="t1"
              name="password"
              label="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              type="password"
              placeholder="password"
              error={errors.password && touched.password}
              helperText={
                errors.password && touched.password ? errors.password : ""
              }
            />{" "}
            &nbsp;
            <MDBBtn type="submit" className="mb-4 w-100">
              Sign in
            </MDBBtn>
            <div className="d-flex justify-content-between mx-3 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <div onClick={() => navigate("/email")}>Forgot password?</div>
            </div>
          </MDBTabsPane>
        </MDBTabsContent>
      </form>
    </MDBContainer>
  );
}

export default Home;
