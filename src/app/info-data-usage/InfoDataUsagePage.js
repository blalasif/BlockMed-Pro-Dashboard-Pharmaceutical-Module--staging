"use client";

import React, { useState } from 'react';
import Button from "@/components/button/Button";
import StyledH5Heading from '@/common/components/styledH5Heading/StyledH5Heading';
import CustomCheckbox from '@/components/customCheckbox/CustomCheckbox';

const initialDataUsage = [
    { label: "Drug Development and Clinical Research", ticked: false },
    { label: "Market Analysis and Strategy", ticked: false },
    { label: "Personalised Medicine", ticked: false },
    { label: "Pharmacovigilance and Safety Monitoring", ticked: false },
    { label: "Health Economics and Outcomes Research (HEOR)", ticked: false },
    { label: "Product Development and Enhancement", ticked: false },
    { label: "Patient Engagement and Support Programs", ticked: false },
    { label: "Regulatory and Compliance Reporting", ticked: false },
    { label: "Healthcare Resource Utilisation", ticked: false },
    { label: "Public Health and Epidemiology", ticked: false },
    { label: "Other - please specify", ticked: false, reason: "" }
];

const InfoDataUsagePage = () => {

    const [userDataUsage, setUserDataUsage] = useState(initialDataUsage);

    const handleCheckboxChange = (index) => {
        const updatedUserDataUsage = userDataUsage.map((item, i) =>
            i === index ? { ...item, ticked: !item.ticked } : item
        );
        setUserDataUsage(updatedUserDataUsage);
    };

    const handleTextareaChange = (event) => {
        const updatedUserDataUsage = userDataUsage.map((item, index) =>
            index === userDataUsage.length - 1 ? { ...item, reason: event.target.value } : item
        );
        setUserDataUsage(updatedUserDataUsage);
    };

    const isLastTicked = userDataUsage[userDataUsage.length - 1]?.ticked;
    const isNextButtonEnabled = userDataUsage.some(item => item.ticked);

    return (
        <div className="flex flex-col w-full gap-8">
            <div>
                <StyledH5Heading font="text-dark-blue">
                    What will you use end-user data for? Please tick all that apply <span className='font-semibold font-inter text-md'>(Choose at least one to continue)</span>
                </StyledH5Heading>
            </div>
            <div className="grid w-full grid-cols-2">
                {userDataUsage.map((item, index) => (
                    <div key={index} className="w-full col-span-2">
                        <div className="w-full col-span-2">
                            <hr className="w-full text-light-gray" />
                        </div>
                        <div className="flex justify-between w-full col-span-2">
                            <CustomCheckbox
                                label={item?.label}
                                isChecked={item?.ticked}
                                onChange={() => handleCheckboxChange(index)}
                            />
                        </div>
                    </div>
                ))}
                {isLastTicked && (
                    <div className="w-full col-span-2">
                        <textarea
                            className="w-full p-2 text-black border rounded-lg h-28 focus:outline-purple border-light-gray placeholder:text-md text-md"
                            placeholder="Please specify"
                            value={userDataUsage[userDataUsage.length - 1].reason}
                            onChange={handleTextareaChange}
                        ></textarea>
                    </div>
                )}
                <div className="w-full col-span-2 mt-6">
                    <Button disabled={!isNextButtonEnabled} font="text-white font-semibold text-lg" variant="bg-light-blue-gradient">
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InfoDataUsagePage;
