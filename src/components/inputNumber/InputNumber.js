"use client";

import React, { useState, useEffect } from 'react';
import StyledH6Heading from '@/common/components/styledH6Heading/StyledH6Heading';
import Image from 'next/image';
import InputField from '../inputField/InputField';

const InputNumber = ({ disabled, label, value, onChange, placeholder, options, required, error, ...props }) => {
    const [selectedOption, setSelectedOption] = useState(options?.find(option => option?.value === value) || options[0]);

    useEffect(() => {
        const matchedOption = options?.find(option => value?.startsWith(option?.label));
        if (matchedOption) {
            setSelectedOption(matchedOption);
        } else {
            setSelectedOption(options[0]);
        }
    }, [value, options]);

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        const selectedOption = options?.find(option => option.value === selectedValue);
        setSelectedOption(selectedOption);
        onChange(event);
    };

    return (
        <div className='flex flex-col gap-2'>
            <div>
                <StyledH6Heading>
                    {label}{required && <span className='text-red'>*</span>}
                </StyledH6Heading>
            </div>
            <div className='flex w-full gap-3'>
                <div className="relative w-[25%]">
                    <select
                        disabled={disabled}
                        value={selectedOption?.value || ''}
                        onChange={handleSelectChange}
                        className={`appearance-none ${value === "" ? "text-dark-gray" : "text-black"} pr-8 pl-12 py-4 border font-inter disabled:bg-dull-white text-h6 placeholder:text-h6 placeholder:text-dark-gray placeholder:font-medium font-medium focus:outline-none rounded-[12px] w-full`}
                    >
                        {options?.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Image src={selectedOption?.flag} alt="flag" width={20} height={20} />
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Right 2">
                                <path id="Vector" d="M7.625 1.25L6.53293 2.35186C5.66203 3.23056 5.22658 3.66992 4.69583 3.73757C4.56579 3.75414 4.43421 3.75414 4.30417 3.73757C3.77342 3.66992 3.33797 3.23056 2.46707 2.35186L1.375 1.25" stroke="#969696" stroke-linecap="round" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className='w-[75%]'>
                    <InputField
                        disabled={disabled}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        {...props}
                    />
                </div>
            </div>
            {error && (
                <div className="text-sm text-red">{error}</div>
            )}
        </div>
    );
};

export default InputNumber;
