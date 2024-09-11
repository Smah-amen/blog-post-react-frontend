import React, { useState } from "react";
import { Formik, Form } from "formik";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { registerValidationSchema } from "../../validation/registerValidation";
import TextField from "../TextField/TextField";

function Register({ login, addPostClicked }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (
    { firstName, lastName, email, password }
    
  ) => {
    axios
      .post("http://localhost:1500/register", {
        name: firstName + " " + lastName,
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
        // console.log(error.response.data);
        setError(error.response.data);
      });

    
  };

  return (
    <div
      className="register-content d-flex flex-column row-gap-3  shadow-lg"
      id="content"
    >
      <div className="header-text mb-4 text-center">
        <h3>Create Account</h3>
      </div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        }}
        validationSchema={registerValidationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <TextField type="text" name="firstName" placeholder="First Name" />

            <TextField type="text" name="lastName" placeholder="Last Name" />

            <TextField type="email" name="email" placeholder="Email Address" />

            <TextField type="password" name="password" placeholder="Password" />

            <div className="input-group mb-3 justify-content-center">
              <button
                type="submit"
                className="btn border-white text-white w-50 fs-6"
              >
                Submit
              </button>
            </div>
              {error && <div className="error-message">{error}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Register;
