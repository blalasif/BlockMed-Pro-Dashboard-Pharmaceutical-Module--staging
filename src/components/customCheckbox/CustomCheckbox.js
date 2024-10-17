import React from 'react';
import './CustomCheckbox.css';
import StyledMdText from '@/common/components/styledMdText/StyledMdText';

const CustomCheckbox = ({ label, isChecked, onChange, simple = true, modal = false }) => {
  
  const handleCheckboxChange = () => {
    onChange();
  };

  const handleDivClick = (event) => {
    event.stopPropagation();
    handleCheckboxChange();
  };

  return (
    <div className={`flex ${modal ? "flex-row-reverse" : "flex-row py-6"} items-center justify-between w-full h-full col-span-2 gap-4 cursor-pointer`} onClick={handleDivClick}>
      <StyledMdText font="font-semibold text-black">{label}</StyledMdText>
      <label className={`cursor-pointer ${simple ? "custom-checkbox" : "gradient-checkbox"}`} onClick={(e) => e.stopPropagation()}>
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <span></span>
      </label>
    </div>
  );
};

export default CustomCheckbox;
