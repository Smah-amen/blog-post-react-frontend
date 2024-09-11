import React, { useState } from "react";
import "./Login.css";
import { Formik, Form } from "formik";
import { loginValidationSchema } from "../../validation/loginValidation";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TextField from "../TextField/TextField";

function Login({ login, addPostClicked }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = ({ email, password }) => {
    axios
      .post("http://localhost:1500/login", {
        email,
        password,
      })
      .then(({ data }) => {
        console.log(data);
        sessionStorage.setItem("id", data.id);
        sessionStorage.setItem("token", data.token);
        login();
        if (addPostClicked) navigate("/formEdit");
        else navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data);
        setError(error.response.data);
      });
  };
  return (
    <div
      className="login-content d-flex flex-column row-gap-3 shadow-lg"
      id="content"
    >
      <div className="header-text text-center">
        <h3>Login</h3>
      </div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginValidationSchema}
        onSubmit={(values, { setSubmitting }) =>
          handleSubmit(values, setSubmitting)
        }
      >
        {({ isSubmitting }) => (
          <Form>
            <TextField type="email" name="email" placeholder="Email Address" />
            <TextField type="password" name="password" placeholder="Password" />
            <div className="input-group mb-3 justify-content-center">
              <button
                type="submit"
                className="btn border-white text-white w-50 fs-6"
              >
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                  style={{ visibility: isSubmitting ? "visible" : "hidden" }}
                ></span>
                <span role="status">Submit</span>
              </button>
            </div>
            {error && <div className="error-message">{error}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;

{
  /* <Form>
    <div className="input-group mb-3 d-flex flex-column">
        <Field
            type="email"
            name="email"
            className="form-control form-control-lg bg-light fs-6 w-100"
            placeholder="Email Address"
        />
        <ErrorMessage name="email" component="div" className="error-message" />
    </div>
    <div className="input-group mb-3">
        <Field
            type="password"
            name="password"
            className="form-control form-control-lg bg-light fs-6"
            placeholder="Password"
        />
        <ErrorMessage
            name="password"
            component="div"
            className="error-message"
        />
    </div>
    <div className="input-group mb-3 justify-content-center">
        <button type="submit" className="btn border-white text-white w-50 fs-6">
            submit
        </button>
    </div>
</Form>; */
}
