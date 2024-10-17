"use client";

import React, { useState } from 'react';
import StyledH3Heading from '@/common/components/styledH3Heading/StyledH3Heading';
import StyledH4Heading from '@/common/components/styledH4Heading/StyledH4Heading';
import StyledLgText from '@/common/components/styledLgText/StyledLgText';
import ContainerCard from '@/components/containerCard/ContainerCard';
import DashboardLayout from '@/layout/DashboardLayout/DashboardLayout';
import Image from 'next/image';
import StyledMdText from '@/common/components/styledMdText/StyledMdText';
import InputRangeSlider from '@/components/inputRangeSlider/InputRangeSlider';
import { Icon } from '@iconify/react';
import InputOptions from '@/components/inputOptions/InputOptions';
import InputMultipleModal from '@/components/inputMultipleModal/InputMultipleModal';
import { content } from '@/data/data';
import Button from '@/components/button/Button';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters, clearFilters } from '@/redux/filtersSlice/FiltersSlice';

const Page = () => {

    const dispatch = useDispatch()
    const globalFilters = useSelector((state) => state.globalFilters.filters)

    const noFilterFound = Object.values(globalFilters).every((filter) => {
        if (Array.isArray(filter)) {
            return filter.length === 0 || (filter[0] === 0 && filter[1] === 100);
        } else if (typeof filter === 'string') {
            return filter === '';
        }
        return false;
    });

    const updateFilter = (key, newValue) => {
        dispatch(setFilters({
            ...globalFilters,
            [key]: newValue,
        }));
    };

    const removeFilter = (key) => {
        dispatch(setFilters({
            ...globalFilters,
            [key]: key === 'diseases' || key === 'bloodGroup' || key === 'location' || key === 'ethnicity'
                ? [] : [0, 100],
        }));
    };

    const handleClearAll = () => {
        dispatch(clearFilters());
    };

    return (
        <DashboardLayout>
            <div className="flex justify-center w-full">
                <div className="flex flex-col w-[92.5%] xl:w-full gap-3 xl:gap-5 pt-4">
                    <div className="flex flex-col gap-1">
                        <div>
                            <StyledH3Heading font="text-light-blue-gradient leading-none">
                                Search the user Database
                            </StyledH3Heading>
                        </div>
                        <div>
                            <StyledLgText font="text-dark-gray">
                                Explore new patient’s data by using global filters.
                            </StyledLgText>
                        </div>
                    </div>
                    <div className="flex flex-col-reverse gap-3 xl:gap-5 xl:flex-row">
                        <div className="xl:w-[67.25%]">
                            <ContainerCard styling="w-full flex flex-col gap-4 pt-5 pb-9 px-[30px]">
                                <div>
                                    <StyledH4Heading font="text-light-blue-gradient py-1">Filters</StyledH4Heading>
                                </div>
                                <div>
                                    <hr className="w-full text-dark-gray" />
                                </div>
                                <div className="flex flex-col w-full gap-4 pt-1 xl:gap-10 xl:grid xl:grid-cols-2">
                                    <div className="w-full col-span-1">
                                        <InputRangeSlider
                                            heading="Number Of Patients"
                                            subheading="Use slider or enter min and max numbers."
                                            values={globalFilters.noOfPatients}
                                            setValues={(newValue) => updateFilter('noOfPatients', newValue)}
                                        />
                                    </div>
                                    <div className="w-full col-span-1">
                                        <InputRangeSlider
                                            heading="Age Range"
                                            subheading="Use slider or enter min and max age."
                                            values={globalFilters.ageRange}
                                            setValues={(newValue) => updateFilter('ageRange', newValue)}
                                        />
                                    </div>
                                    <div className="w-full col-span-1">
                                        <InputRangeSlider
                                            heading="Body Mass Index (BMI)"
                                            subheading="Use slider or enter min and max BMI."
                                            values={globalFilters.bmiRange}
                                            setValues={(newValue) => updateFilter('bmiRange', newValue)}
                                        />
                                    </div>
                                    <div className="w-full col-span-1">
                                        <InputOptions
                                            heading="Sex at Birth"
                                            subheading="Filters for gender based results."
                                            selectedGender={globalFilters.gender}
                                            setSelectedGender={(newValue) => updateFilter('gender', newValue)}
                                        />
                                    </div>
                                    <div className="w-full col-span-1">
                                        <InputMultipleModal
                                            fullWidth
                                            value={globalFilters.diseases}
                                            options={content?.diseaseOptions}
                                            heading="Disease"
                                            subheading="Choose multiple diseases."
                                            placeholder="Select"
                                            setSelectedOptions={(newValue) => updateFilter('diseases', newValue)}
                                            handleClearAll={handleClearAll}
                                            
                                        />
                                    </div>
                                    <div className="w-full col-span-1">
                                        <InputMultipleModal
                                            fullWidth
                                            value={globalFilters.bloodGroup}
                                            options={content?.bloodGroupOptions}
                                            heading="Blood Group"
                                            subheading="Choose one or more blood groups"
                                            placeholder="Select"
                                            setSelectedOptions={(newValue) => updateFilter('bloodGroup', newValue)}
                                            handleClearAll={handleClearAll}
                                        />
                                    </div>
                                    <div className="w-full col-span-1">
                                        <InputMultipleModal
                                            fullWidth
                                            value={globalFilters.location}
                                            options={content?.locationOptions}
                                            heading="Location"
                                            subheading="Select location for area based results."
                                            placeholder="Select"
                                            setSelectedOptions={(newValue) => updateFilter('location', newValue)}
                                            handleClearAll={handleClearAll}
                                        />
                                    </div>
                                    <div className="w-full col-span-1">
                                        <InputMultipleModal
                                            fullWidth
                                            value={globalFilters.ethnicity}
                                            options={content?.ethnicityOptions}
                                            heading="Ethnicity"
                                            subheading="Choose one or more ethnicities."
                                            placeholder="Select"
                                            setSelectedOptions={(newValue) => updateFilter('ethnicity', newValue)}
                                            handleClearAll={handleClearAll}
                                        />
                                    </div>
                                    <div className="flex justify-center w-full col-span-2">
                                        <Link href="/search-results" className="w-full xl:w-[50%]">
                                            <Button font="text-white font-semibold text-lg" variant="bg-light-blue-gradient">Show Results</Button>
                                        </Link>
                                    </div>
                                </div>
                            </ContainerCard>
                        </div>
                        <div className="xl:w-[32.75%]">
                            <ContainerCard styling="w-full flex flex-col gap-4 py-5 px-[30px] min-h-[310px]">
                                <div className="flex items-center justify-between w-full">
                                    <div>
                                        <StyledH4Heading font="text-light-blue-gradient py-1">Applied Filters</StyledH4Heading>
                                    </div>
                                    <div>
                                        <button
                                            disabled={noFilterFound}
                                            className="font-semibold disabled:text-dark-gray font-inter disabled:cursor-not-allowed disabled:opacity-50"
                                            onClick={handleClearAll}
                                        >
                                            Clear All
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <hr className="w-full text-dark-gray" />
                                </div>
                                {noFilterFound ? (
                                    <div className="flex flex-col items-center gap-3 py-10">
                                        <div>
                                            <Image src="/assets/icons/no-result.svg" width={68} height={71} alt="No result" />
                                        </div>
                                        <div>
                                            <StyledMdText font="text-dark-gray">No global filters applied yet.</StyledMdText>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex flex-wrap gap-3 py-4">
                                        {Object.entries(globalFilters).map(([key, value]) => {
                                            if (Array.isArray(value) && (key === 'diseases' || key === 'bloodGroup' || key === 'location' || key === 'ethnicity')) {
                                                if (value.length > 0) {
                                                    return value.map((item, index) => (
                                                        <div key={`${key}-${index}`} className="flex items-center py-2 text-white rounded-full bg-dark-blue-gradient w-max">
                                                            <StyledMdText font="text-white px-3 capitalize">
                                                                {item}
                                                            </StyledMdText>
                                                            <div className="pr-2 cursor-pointer" onClick={() => updateFilter(key, globalFilters[key].filter(i => i !== item))}>
                                                                <Icon icon="oui:cross-in-circle-empty" width="14" height="14" />
                                                            </div>
                                                        </div>
                                                    ));
                                                }
                                            } else if (Array.isArray(value)) {
                                                if (value[0] !== 0 || value[1] !== 100) {
                                                    return (
                                                        <div key={key} className="flex items-center py-2 text-white rounded-full bg-dark-blue-gradient w-max">
                                                            <StyledMdText font="text-white px-3">
                                                                {value[0]} to {value[1]}
                                                            </StyledMdText>
                                                            <div className="pr-2 cursor-pointer" onClick={() => removeFilter(key)}>
                                                                <Icon icon="oui:cross-in-circle-empty" width="14" height="14" />
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            } else if (value) {
                                                return (
                                                    <div key={key} className="flex items-center py-2 text-white rounded-full bg-dark-blue-gradient w-max">
                                                        <StyledMdText font="text-white px-3 capitalize">
                                                            {value}
                                                        </StyledMdText>
                                                        <div className="pr-2 cursor-pointer" onClick={() => removeFilter(key)}>
                                                            <Icon icon="oui:cross-in-circle-empty" width="14" height="14" />
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                )}
                            </ContainerCard>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Page;