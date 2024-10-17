"use client"

import StyledH3Heading from "@/common/components/styledH3Heading/StyledH3Heading"
import StyledMdText from "@/common/components/styledMdText/StyledMdText"
import BackActionButton from "@/components/backActionButton/BackActionButton"
import Button from "@/components/button/Button"
import InputPasswordField from "@/components/inputPasswordField/InputPasswordField"
import { useFormik } from "formik"
import { validationSchema } from "@/schema/newPasswordSchema"
import { useRouter } from "next/navigation"

const NewPasswordPage = () => {

    const router = useRouter()

    // FormIk hook
    const formik = useFormik({
        initialValues: {
            newPassword: '',
            confirmPassword: ''
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('Form values:', values);
        }
    });

    const handleCancel = (e) => {
        e.preventDefault()
        router.back();
    }

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col w-full gap-8">
            <div>
                <BackActionButton fontColor="text-black" />
            </div>
            <div className="flex flex-col w-full">
                <div>
                    <StyledH3Heading font="text-light-blue-gradient font-inter">Setup a new password</StyledH3Heading>
                </div>
                <div className="w-[85%]">
                    <StyledMdText font="text-dark-gray">Enter a valid password.</StyledMdText>
                </div>
            </div>
            <div className="flex flex-col w-full gap-6">
                <div className="w-full">
                    <InputPasswordField
                        label="New password"
                        placeholder="New password"
                        name="newPassword"
                        value={formik.values.newPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleFocus}
                        error={formik.touched.newPassword && formik.errors.newPassword ? formik.errors.newPassword : null}
                    />
                </div>
                <div className="w-full">
                    <InputPasswordField
                        label="Confirm password"
                        placeholder="Confirm password"
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleFocus}
                        error={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null}
                    />
                </div>
            </div>
            <div className="flex w-full gap-3">
                <Button onClick={handleCancel} font="text-dark-gray font-semibold text-lg" variant="outlined-button">Cancel</Button>
                <Button disabled={!(formik.isValid && formik.dirty)} type="submit" font="text-white font-semibold text-lg" variant="bg-light-blue-gradient">Save</Button>
            </div>
        </form>
    )
}

export default NewPasswordPage
