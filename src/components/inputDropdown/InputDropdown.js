import { useRef, useState } from "react"
import StyledXlText from '@/common/components/styledXlText/StyledXlText';
import StyledH6Heading from '@/common/components/styledH6Heading/StyledH6Heading';
import StyledLgText from '@/common/components/styledLgText/StyledLgText';
import StyledMdText from '@/common/components/styledMdText/StyledMdText';
import Image from 'next/image';
import useOutsideClick from "@/hooks/useOutsideClick";
import InputSearch from "../inputSearch/InputSearch";

const InputDropdown = ({ heading, subHeading, disabled, label, value, onChange, options, placeholder, required, styling, isHeading = false, isSearchbar = false, fullWidth, error, ...props }) => {

    const [searchInput, setSearchInput] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);
    useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleOptionClick = (option) => {
        onChange(option.value);
        setSearchInput('');
        setIsDropdownOpen(false);
    };

    const filteredOptions = options?.filter(option =>
        JSON.stringify(option).toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div className='flex flex-col gap-2' ref={dropdownRef}>
            {
                label &&
                <div>
                    <StyledH6Heading>
                        {label}{required && <span className='text-red'>*</span>}
                    </StyledH6Heading>
                </div>}
            <div
                disabled={disabled}
                className={`relative font-medium hover:border-purple text-dark-blue cursor-pointer text-gray border border-light-gray font-inter text-h6 placeholder:text-h6 !placeholder:text-dark-gray placeholder:font-medium focus:outline-none rounded-[12px] w-full ${styling}`}
            >
                <div className="px-5 py-4" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <StyledLgText font={value !== "" ? "text-black" : "text-dark-gray font-normal"}>{value || placeholder}</StyledLgText>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Right 2">
                                <path id="Vector" d="M7.625 1.25L6.53293 2.35186C5.66203 3.23056 5.22658 3.66992 4.69583 3.73757C4.56579 3.75414 4.43421 3.75414 4.30417 3.73757C3.77342 3.66992 3.33797 3.23056 2.46707 2.35186L1.375 1.25" stroke="#969696" stroke-linecap="round" />
                            </g>
                        </svg>
                    </div>
                </div>
                {isDropdownOpen && (
                    <div className={`absolute left-0 mt-2 bg-white border border-light-gray shadow-lg z-10 rounded-[12px] flex flex-col gap-4 p-4 ${fullWidth ? "w-full" : "w-[250px]"}`}>
                        {
                            isHeading &&
                            <>
                                <div className='absolute top-2 right-2'>
                                    <Image onClick={() => setIsDropdownOpen(false)} src="/assets/icons/cross.svg" width={20} height={20} alt='Cross' />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <div className='w-full pt-2 text-center'>
                                        <StyledXlText font="text-dark-blue">{heading}</StyledXlText>
                                    </div>
                                    <div className='text-center'>
                                        <StyledMdText font="text-dark-gray">{subHeading}</StyledMdText>
                                    </div>
                                </div>
                                <div>
                                    <hr className='w-full text-dark-gray' />
                                </div>
                            </>
                        }
                        {
                            isSearchbar &&
                            <div>
                                <InputSearch placeholder="Search" searchInput={searchInput} handleSearchChange={handleSearchChange} />
                            </div>}
                        <ul className={`p-1 bg-light-off-white rounded-[8px] ${searchInput === "" ? "h-[30vh] xl:h-[20vh]" : "h-max"} overflow-auto`}>
                            {
                                filteredOptions?.length > 0 ?
                                    filteredOptions?.map((item, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleOptionClick(item)}
                                            className="px-4 py-2 text-lg font-medium text-dark-blue cursor-pointer hover:bg-light-blue-gradient hover:text-white rounded-[8px] flex gap-3"
                                        >
                                            {
                                                item?.flag &&
                                                <Image src={item.flag} width={24} height={24} alt='Image' />
                                            }
                                            {item.value}
                                        </li>
                                    )) :
                                    <div className='w-full p-[9.5px] text-center'>
                                        <StyledMdText font="text-black">No Result Found</StyledMdText>
                                    </div>
                            }
                        </ul>
                    </div>
                )}
                {error && (
                    <div className="text-sm text-red-500">{error}</div>
                )}
            </div>
        </div>
    );
};

export default InputDropdown;
