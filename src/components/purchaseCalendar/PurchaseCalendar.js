import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Icon } from '@iconify/react';
import StyledLgText from '@/common/components/styledLgText/StyledLgText';
import useOutsideClick from '@/hooks/useOutsideClick';

const PurchaseCalendar = ({ selectedDate, setSelectedDate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const calendarRef = useRef(null);
    const buttonRef = useRef(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setIsOpen(false);
    };

    const handleToggle = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    // Apply the useOutsideClick hook
    useOutsideClick(calendarRef, () => setIsOpen(false), buttonRef);

    return (
        <div ref={buttonRef} className="relative w-full border border-light-gray rounded-[12px] p-4 h-full disabled:cursor-not-allowed cursor-pointer" onClick={handleToggle}>
            <div className="flex items-center justify-between">
                <StyledLgText font="text-dark-gray">
                    {selectedDate ? new Date(selectedDate)?.toLocaleDateString() : 'Purchased On'}
                </StyledLgText>
                <Icon color="#969696" icon="healthicons:calendar" width="26" height="26" />
            </div>
            {isOpen && (
                <div ref={calendarRef} className="absolute right-[0%] xl:-right-[10.75%] -mt-3 xl:mt-2 top-full" onClick={(e) => e.stopPropagation()}>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        maxDate={new Date()}
                        inline
                    />
                </div>
            )}
        </div>
    );
};

export default PurchaseCalendar;
