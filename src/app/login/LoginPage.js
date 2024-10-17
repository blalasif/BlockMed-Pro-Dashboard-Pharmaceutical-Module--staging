"use client"

import React, { useState } from 'react';
import { useFormik } from 'formik';
import StyledH3Heading from "@/common/components/styledH3Heading/StyledH3Heading";
import StyledLgText from "@/common/components/styledLgText/StyledLgText";
import Button from "@/components/button/Button";
import InputField from "@/components/inputField/InputField";
import InputPasswordField from "@/components/inputPasswordField/InputPasswordField";
import Link from 'next/link';
import { validationSchema } from "@/schema/loginSchema"
import ReCaptchaComponent from '@/components/reCaptchaComponent/ReCaptchaComponent';

const LoginPage = () => {

    const [captchaValue, setCaptchaValue] = useState('');
    const [captchaExpired, setCaptchaExpired] = useState('false');

    // FormIk hook
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: (values) => {
            console.log('Form values:', values);
        }
    });

    return (
        <div className="flex flex-col w-full gap-8">
            <div>
                <StyledH3Heading font="text-light-blue-gradient">Login</StyledH3Heading>
            </div>
            <form className="flex flex-col w-full gap-5" onSubmit={formik.handleSubmit}>
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
                    <InputPasswordField
                        label="Password"
                        placeholder="Enter your password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={formik.handleFocus}
                        error={formik.touched.password && formik.errors.password ? formik.errors.password : null}
                    />
                </div>
                <Link className="w-fit" href="/reset-password">
                    <StyledLgText font="text-light-blue-gradient font-semibold">Forgot Password?</StyledLgText>
                </Link>
                <div>
                    <ReCaptchaComponent onValueChange={setCaptchaValue} onExpiredChange={setCaptchaExpired} />
                </div>
                <Button
                    font="text-white font-semibold text-lg"
                    variant="bg-light-blue-gradient"
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty && captchaValue && captchaExpired === 'false')}
                >
                    Log In
                </Button>
            </form>
        </div>
    );
};

export default LoginPage;
