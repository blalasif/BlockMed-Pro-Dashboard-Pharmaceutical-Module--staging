"use client";

import React from 'react';
import { useFormik } from 'formik';
import StyledH3Heading from "@/common/components/styledH3Heading/StyledH3Heading";
import Button from "@/components/button/Button";
import InputField from "@/components/inputField/InputField";
import InputNumber from "@/components/inputNumber/InputNumber";

const MainContactPage = () => {
    const numberOptions = [
        { value: '+1', label: '+1', flag: "/assets/icons/us.svg" },
        { value: '+44', label: '+44', flag: "/assets/icons/uk.svg" },
        { value: '+82', label: '+82', flag: "/assets/icons/korea.svg" },
        { value: '+92', label: '+92', flag: "/assets/icons/pak.svg" },
    ];

    // Formik hook
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            registrationNo: '',
            companyRegisteredIn: '',
            vatRegistrationNo: '',
            phoneNo: '',
        },
        onSubmit: (values) => {
            console.log('Form values:', values);
        }
    });

    return (
        <div className="flex flex-col w-full gap-8">
            <div>
                <StyledH3Heading font="text-light-blue-gradient">Main Contact</StyledH3Heading>
            </div>
            <form className="grid w-full grid-cols-2 gap-3 xl:gap-5" onSubmit={formik.handleSubmit}>
                <div className="flex w-full col-span-2 gap-3">
                    <div className="w-full col-span-1 xl:col-span-2">
                        <InputField
                            label="First Name"
                            placeholder="Enter your first name"
                            name="firstName"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onFocus={formik.handleFocus}
                            onBlur={formik.handleBlur}
                            error={formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null}
                        />
                    </div>
                    <div className="w-full col-span-1 xl:col-span-2">
                        <InputField
                            label="Last Name"
                            placeholder="Enter your last name"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onFocus={formik.handleFocus}
                            onBlur={formik.handleBlur}
                            error={formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : null}
                        />
                    </div>
                </div>
                <div className="w-full col-span-2">
                    <InputField
                        label="Company Name"
                        name="companyName"
                        value="Pfizer"
                        disabled
                    />
                </div>
                <div className="w-full col-span-2">
                    <InputField
                        label="Registration No"
                        name="registrationNo"
                        value="xxxxxx"
                        disabled
                    />
                </div>
                <div className="w-full col-span-2">
                    <InputField
                        label="Company Registered In"
                        name="companyRegisteredIn"
                        value="xxxxxx"
                        disabled
                    />
                </div>
                <div className="w-full col-span-2">
                    <InputField
                        label="VAT Registration No"
                        name="vatRegistrationNo"
                        value="xxxxxx"
                        disabled
                    />
                </div>
                <div className="w-full col-span-2">
                    <InputNumber
                        options={numberOptions}
                        label="Phone No"
                        name="phoneNo"
                        value="xxxxxx"
                        disabled
                    />
                </div>
                <div className="w-full col-span-2 pt-2">
                    <Button
                        font="text-white font-semibold text-lg"
                        variant="bg-light-blue-gradient"
                        type="submit"
                    >
                        Next
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default MainContactPage;
