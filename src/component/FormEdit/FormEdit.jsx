import { useState } from "react";
import "./FormEdit.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form } from "formik";
import TextField from "../TextField/TextField";
import { postValidationSchema } from "../../validation/postValidation";

function FormEdit() {
    const { state } = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        if (state) {
            axios
                .patch(
                    `http://localhost:1500/posts/${state.id}`,
                    {
                        title: values.title,
                        description: values.description,
                        imgUrl: values.imgUrl,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${sessionStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                )
                .then(({ data }) => {
                    console.log(data);
                    navigate("/");
                })
                .catch((error) => console.log(error));
        } else {
            axios
                .post(
                    "http://localhost:1500/posts",
                    {
                        title: values.title,
                        description: values.description,
                        imgUrl: values.imgUrl,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${sessionStorage.getItem(
                                "token"
                            )}`,
                        },
                    }
                )
                .then(({ data }) => {
                    console.log(data);
                    navigate("/");
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div className="form-container">
            <h1 className="form-title">{state ? "Edit" : "Create"} Post</h1>
            <Formik
                initialValues={{
                    title: state ? state.title : "",
                    description: state ? state.description : "",
                    imgUrl: state ? state.image : "",
                }}
                validationSchema={postValidationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <TextField
                            type="text"
                            name="title"
                            placeholder="Title"
                        />
                        <TextField
                            type="text"
                            name="imgUrl"
                            placeholder="Image URL"
                        />
                        <TextField
                            type="textarea"
                            name="description"
                            placeholder="Description"
                        />
                        <div className="input-group mb-3 justify-content-center">
                            <button
                                type="submit"
                                className="btn border-white text-white w-50 fs-6"
                            >
                                {state ? "Save" : "Add"}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default FormEdit;
