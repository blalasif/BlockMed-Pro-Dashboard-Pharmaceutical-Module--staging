"use client"

import StyledH6Heading from '@/common/components/styledH6Heading/StyledH6Heading'
import { Icon } from '@iconify/react'
import { useState } from 'react';

const InputPasswordField = ({ disabled, label, value, onChange, placeholder, required, name, error, ...props }) => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className='flex flex-col gap-2'>
            <div>
                <StyledH6Heading>
                    {label}{required && <span className='text-red'>*</span>}
                </StyledH6Heading>
            </div>
            <div className='relative'>
                <input name={name} disabled={disabled} type={passwordVisible ? "text" : "password"} value={value} onChange={onChange} placeholder={placeholder} {...props} className='pl-5 pr-14 hover:border-purple py-4 text-gray border font-inter text-h6 placeholder:text-h6 placeholder:text-dark-gray placeholder:font-medium font-medium focus:outline-none rounded-[12px] w-full' />
                <div className="absolute inset-y-0 right-0 flex items-center pr-5 cursor-pointer" onClick={togglePasswordVisibility}>
                    {passwordVisible ?
                        <Icon icon="mdi:eye" width="20" height="20" />
                        :
                        <Icon icon="mdi:eye-off" width="20" height="20" />}
                </div>
            </div>
            {error && (
                <div className="text-sm text-red">{error}</div>
            )}
        </div>
    )
}

export default InputPasswordField
