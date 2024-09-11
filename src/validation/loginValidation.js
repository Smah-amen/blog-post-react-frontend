import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
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
