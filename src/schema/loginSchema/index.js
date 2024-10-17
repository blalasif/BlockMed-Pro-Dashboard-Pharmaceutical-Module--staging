import * as Yup from 'yup';

// Validation schema using Yup
export const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .trim()
        .lowercase()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required"),
});