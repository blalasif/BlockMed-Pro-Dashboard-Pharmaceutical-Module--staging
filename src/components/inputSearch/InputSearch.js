import { Icon } from '@iconify/react'
import React from 'react'

const InputSearch = ({ searchInput, handleSearchChange, styling, placeholder, searchIcon = false }) => {
    return (
        <div className="relative w-full">
            {
                searchIcon &&
                <div className="absolute top-[27%] left-[5%]">
                    <Icon icon="mynaui:search" width="24" height="24" color="#969696" />
                </div>}
            <input
                type='text'
                placeholder={placeholder}
                value={searchInput}
                onChange={handleSearchChange}
                className={`${searchIcon ? "pl-[17.5%] pr-5" : "px-5"} z-20 py-3 text-gray hover:border-purple border font-inter text-h6 placeholder:text-md placeholder:text-dark-gray placeholder:font-normal font-medium focus:outline-none rounded-[12px] w-full ${styling}`}
            />
        </div>
    )
}

export default InputSearch
