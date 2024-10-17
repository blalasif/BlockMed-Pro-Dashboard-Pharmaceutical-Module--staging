import * as Yup from 'yup';

// Validation schema using Yup
export const validationSchema = Yup.object({
    newPassword: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], "Passwords must match")
        .required("Confirm Password is required"),
});
