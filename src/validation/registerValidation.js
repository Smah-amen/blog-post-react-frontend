import * as Yup from "yup";

export const registerValidationSchema = Yup.object({
    firstName: Yup.string()
        .matches(/^[A-Za-z]+$/, "First name must contain only letters")
        .required("First name is required"),
    lastName: Yup.string()
        .matches(/^[A-Za-z]+$/, "Last name must contain only letters")
        .required("Last name is required"),
    email: Yup.string()
        .matches(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Invalid email address"
        )
        .required("Email address is required"),
    password: Yup.string()
        // .matches(
        //   /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        //   "Password must be at least 6 characters long and contain at least one letter and one number"
        // )
        .min(5)
        .required("Password is required"),
});
