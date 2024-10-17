import React from 'react';

const InputSelect = ({ disabled, options,  selectedOption, setSelectedOption }) => {

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
    };

    return (
        <select
            disabled={disabled}
            value={selectedOption || ''}
            onChange={handleSelectChange}
            className={` border-light-gray focus:outline-none text-dark-gray pl-2 pr-4 py-2 border font-inter text-h6 placeholder:text-h6 placeholder:text-dark-gray placeholder:font-normal font-normal rounded-[12px] w-full`}
        >
            {options?.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.value}
                </option>
            ))}
        </select>
    );
};

export default InputSelect;
