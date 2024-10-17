import React from 'react';
import StyledLgText from '@/common/components/styledLgText/StyledLgText';
import StyledMdText from '@/common/components/styledMdText/StyledMdText';
import { Icon } from '@iconify/react';
import { content } from '@/data/data';

const InputOptions = ({ heading, subheading, selectedGender, setSelectedGender }) => {
    return (
        <div className="flex flex-col gap-3">
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
            <div className="flex">
                {content?.genderOptions?.map((option, index) => (
                    <div
                        key={option.value}
                        onClick={() => setSelectedGender(option.value)}
                        className={`flex items-center gap-2 px-4 py-2 cursor-pointer border ${index === 0 ? "rounded-l-lg" : ""} ${index === content?.genderOptions.length - 1 ? "rounded-r-lg" : ""}
                            ${selectedGender === option.value ? 'bg-light-blue-gradient text-white' : 'bg-white text-black'}`}
                    >
                        <Icon icon={option.icon} width={20} height={20} />
                        <StyledMdText font={selectedGender === option.value ? 'text-white' : 'text-black'}>
                            {option.label}
                        </StyledMdText>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InputOptions;
