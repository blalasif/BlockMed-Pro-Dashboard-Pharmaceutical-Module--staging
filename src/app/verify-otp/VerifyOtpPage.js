"use client";

import { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import StyledH3Heading from "@/common/components/styledH3Heading/StyledH3Heading";
import StyledMdText from "@/common/components/styledMdText/StyledMdText";
import Button from "@/components/button/Button";
import Link from "next/link";
import OtpInput from 'react-otp-input';
import { Icon } from "@iconify/react";

const VerifyOtpPage = () => {
    const fetchedEmail = "someone@gmail.com";
    const otpInputRef = useRef(null);

    const formik = useFormik({
        initialValues: {
            otp: '',
        },
        validationSchema: Yup.object({
            otp: Yup.string()
                .required('This field is required')
                .length(6, 'OTP must be 6 digits'),
        }),
        onSubmit: (values) => {
            // Handle OTP submission logic here
            console.log(values);
        },
    });

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (otpInputRef.current && !otpInputRef.current.contains(event.target)) {
                formik.setTouched({ otp: true });
                formik.validateField('otp');
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [formik]);

    return (
        <form onSubmit={formik.handleSubmit} className="flex flex-col w-full gap-10 rounded-[22px] xl:border border-light-gray xl:p-14">
            <div className="flex flex-col gap-1">
                <div>
                    <StyledH3Heading font="text-light-blue-gradient leading-none">Enter Your OTP</StyledH3Heading>
                </div>
                <div>
                    <StyledMdText font="text-dark-gray !font-light">{fetchedEmail}</StyledMdText>
                </div>
            </div>
            <div className="flex flex-col w-full gap-5">
                <div className="flex justify-center w-full" ref={otpInputRef}>
                    <OtpInput
                        value={formik.values.otp}
                        onChange={(otp) => formik.setFieldValue('otp', otp)}
                        onPaste={(event) => formik.setFieldValue('otp', event.clipboardData.getData('text'))}
                        inputStyle={{
                            width: "62.5%",
                            height: "60px",
                            margin: "0 5px",
                            borderRadius: "10px",
                            border: `1px solid ${formik.errors.otp && formik.touched.otp ? "#C9311A" : "#969696"}`,
                            textAlign: "center",
                            color: "#141414",
                            outline: "none",
                            fontSize: "20px",
                            appearance: 'textfield'
                        }}
                        shouldAutoFocus={true}
                        numInputs={6}
                        inputMode="numeric"
                        renderInput={(props) => (
                            <input
                                {...props}
                                type="text"
                                pattern="\d*"
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                            />
                        )}
                    />
                </div>
                <div className="flex justify-between w-full">
                    {formik.errors.otp && formik.touched.otp ? (
                        <div className="text-red w-full xl:w-[75%]">
                            <StyledMdText font="text-red-500 flex gap-1.5 items-center">
                                <Icon icon="solar:danger-triangle-linear" width="18" height="18" />
                                {formik.errors.otp}
                            </StyledMdText>
                        </div>
                    ) : null}
                    <div className="flex justify-end w-full gap-2">
                        <div>
                            <StyledMdText font="text-black">01:59</StyledMdText>
                        </div>
                        <div className="cursor-pointer">
                            <StyledMdText font="text-dark-gray underline">Resend</StyledMdText>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <Button
                        font="text-white font-semibold text-lg"
                        variant="bg-light-blue-gradient"
                        type="submit"
                        disabled={!(formik.isValid && formik.dirty)}
                    >
                        Submit
                    </Button>
                </div>
                <div className="flex justify-center w-full gap-1">
                    <div>
                        <StyledMdText font="text-dark-gray">Want to change email?</StyledMdText>
                    </div>
                    <Link href="/reset-password">
                        <StyledMdText font="text-black font-semibold underline">Click Here</StyledMdText>
                    </Link>
                </div>
            </div>
        </form>
    );
};

export default VerifyOtpPage;
