"use client"

import StyledH3Heading from "@/common/components/styledH3Heading/StyledH3Heading"
import StyledMdText from "@/common/components/styledMdText/StyledMdText"
import BackActionButton from "@/components/backActionButton/BackActionButton"
import Button from "@/components/button/Button"
import InputField from "@/components/inputField/InputField"
import { useFormik } from "formik"
import { validationSchema } from "@/schema/resetPasswordSchema"

const ResetPasswordPage = () => {

    // FormIk hook
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('Form values:', values);
        }
    });

    return (
        <div className="flex flex-col w-full gap-8">
            <div>
                <BackActionButton fontColor="text-black" />
            </div>
            <div className="flex flex-col w-full">
                <div>
                    <StyledH3Heading font="text-light-blue-gradient font-inter">Reset Password</StyledH3Heading>
                </div>
                <div className="w-[85%]">
                    <StyledMdText font="text-dark-gray">Provide us your valid email address and we will send you recovery password link.</StyledMdText>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit} className="flex flex-col w-full gap-5">
                <div className="w-full">
                    <InputField
                        label="Email Address"
                        placeholder="Enter your email address"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleFocus}
                        error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                    />
                </div>
                <div className="w-full">
                    <Button type="submit" disabled={!(formik.isValid && formik.dirty)} font="text-white font-semibold text-lg" variant="bg-light-blue-gradient">Recover Password</Button>
                </div>
            </form>
        </div>
    )
}

export default ResetPasswordPage
