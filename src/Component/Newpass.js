import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";

import * as yup from "yup";
import { useFormik } from "formik";
import YupPassword from "yup-password";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
YupPassword(yup);
function Newpass() {
  const formValidationschema = yup.object({
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

  const navigate = useNavigate();

  const { handleChange, handleBlur, errors, touched, values, handleSubmit } =
    useFormik({
      initialValues: {
        password: "",
      },
      validationSchema: formValidationschema,
      onSubmit: (values) => {
        verify(values);
      },
    });
  const param = useParams();
  const [justifyActive, setJustifyActive] = useState("tab1");


  const verify = async (values) => {
  
    try {
      await fetch(
        `${process.env.REACT_APP_BASE_URL}/password-reset/${param.id}/${param.token}`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      ).then((res) => {
        if (res.status === 200) {
          window.alert("password changed");
          navigate("/dashboard");
        } else {
          console.log(res.status);
        }
      });
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between"
        >
          <form onSubmit={handleSubmit}>
            <MDBTabsContent>
              <MDBTabsPane className="col-sm-6" show={justifyActive === "tab1"}>
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
                  save
                </MDBBtn>
              </MDBTabsPane>
            </MDBTabsContent>
          </form>
        </MDBTabs>
      </MDBContainer>
    </>
  );
}

export default Newpass;
