import { useRef, useState, useEffect } from "react";
import StyledXlText from '@/common/components/styledXlText/StyledXlText';
import StyledLgText from '@/common/components/styledLgText/StyledLgText';
import StyledMdText from '@/common/components/styledMdText/StyledMdText';
import Image from 'next/image';
import useOutsideClick from "@/hooks/useOutsideClick";
import InputSearch from "../inputSearch/InputSearch";
import { Icon } from "@iconify/react";
import Button from "../button/Button";
import Modal from "../modals/Modal/Modal";
import CustomCheckbox from "../customCheckbox/CustomCheckbox";

const InputMultipleModal = ({
    heading,
    subheading,
    disabled,
    value,
    options,
    placeholder,
    styling,
    handleClearAll,
    setSelectedOptions
}) => {
    const [searchInput, setSearchInput] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [localSelectedOptions, setLocalSelectedOptions] = useState(value || []);

    const dropdownRef = useRef(null);
    useOutsideClick(dropdownRef, () => handleModalClose());

    useEffect(() => {
        // Reset search input when options change
        setSearchInput('');
    }, [options]);

    useEffect(() => {
        // Reset localSelectedOptions when the component is mounted or value changes
        setLocalSelectedOptions(value || []);
    }, [value]);

    const handleSearchChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleOptionsSelect = (option) => {
        const updatedOptions = localSelectedOptions.includes(option)
        ? localSelectedOptions.filter((item) => item !== option)
        : [...localSelectedOptions, option];

        setLocalSelectedOptions(updatedOptions);
    };

    const filteredOptions = options?.filter(option =>
        option.value.toLowerCase().includes(searchInput.toLowerCase())
    );

    const handleApplyFilter = () => {
        setSelectedOptions(localSelectedOptions);
        setIsDropdownOpen(false); // Close the dropdown after applying
    };

    const handleClear = () => {
        handleClearAll(); // Clear all selected options
        setSearchInput(""); // Reset search input
    };
    
    const handleModalClose = () => {
        setIsDropdownOpen(false)
        setLocalSelectedOptions([...value]); // Clear all selected options
        setSearchInput(""); // Reset search input
    };

    return (
        <div className='flex flex-col gap-2'>
            <div className="flex flex-col w-full">
                <div>
                    <StyledLgText font="text-dark-blue font-semibold">
                        {heading}
                    </StyledLgText>
                </div>
                <div>
                    <StyledMdText font="text-dark-gray">
                        {subheading}
                    </StyledMdText>
                </div>
            </div>
            <div
                disabled={disabled}
                className={`relative font-medium hover:border-purple text-dark-blue text-gray border border-light-gray font-inter text-h6 placeholder:text-h6 !placeholder:text-dark-gray placeholder:font-medium focus:outline-none rounded-[12px] w-full ${styling}`}
            >
                <div className="px-5 py-4 cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <StyledLgText font={localSelectedOptions.length > 0 ? "text-black w-[90%]" : "text-dark-gray w-[90%] font-normal"}>
                        {localSelectedOptions.length > 0 ? localSelectedOptions.slice(0, 2).join(", ") + ", ..." : placeholder}
                    </StyledLgText>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <Icon icon="ri:arrow-drop-right-line" width="24" height="24" />
                    </div>
                </div>
                {isDropdownOpen && (
                    <Modal>
                        <div ref={dropdownRef} className={`bg-white border border-light-gray shadow-lg z-10 rounded-[12px] flex flex-col gap-4 py-5 px-7 xl:px-14 w-[90%] xl:w-[550px] relative`}>

                            <div className='absolute cursor-pointer top-2 right-2'>
                                <Image onClick={() => handleModalClose()} src="/assets/icons/cross.svg" width={20} height={20} alt='Cross' />
                            </div>
                            <div className='w-full pt-2'>
                                <StyledXlText font="text-dark-blue">Select {heading}s</StyledXlText>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <div className="w-[60%] xl:w-[40%]">
                                    <InputSearch placeholder="Search" searchInput={searchInput} handleSearchChange={handleSearchChange} />
                                </div>
                                <div>
                                    <StyledMdText font="text-dark-gray">Selected: {localSelectedOptions.length}</StyledMdText>
                                </div>
                            </div>
                            <div>
                                <hr className='w-full text-dark-gray' />
                            </div>
                            <div className={` ${searchInput === "" ? "h-[40vh] xl:h-[30vh]" : "h-max"} grid grid-cols-2 overflow-auto gap-4`}>
                                {
                                    filteredOptions?.length > 0 ?
                                        filteredOptions.map((item, index) => (
                                            <div key={index} className="w-fit">
                                                <CustomCheckbox
                                                    label={item?.value}
                                                    isChecked={localSelectedOptions.includes(item.value)}
                                                    onChange={() => handleOptionsSelect(item.value)}
                                                    modal
                                                />
                                            </div>
                                        )) :
                                        <div className='w-full col-span-2 p-3 text-center'>
                                            <StyledMdText font="text-black">No Result Found</StyledMdText>
                                        </div>
                                }
                            </div>
                            <div>
                                <hr className='w-full text-dark-gray' />
                            </div>
                            <div className="w-[50%] self-center">
                                <Button onClick={handleApplyFilter} font="text-white font-semibold text-lg" variant="bg-light-blue-gradient">Apply Filter</Button>
                                <Button onClick={handleClear} font="text-dark-gray font-semibold text-lg" variant="bg-white-button">Clear All</Button>
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        </div >
    );
};

export default InputMultipleModal;
