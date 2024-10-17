"use client"

import { useState, useRef } from "react"
import StyledH3Heading from "@/common/components/styledH3Heading/StyledH3Heading"
import StyledH4Heading from "@/common/components/styledH4Heading/StyledH4Heading"
import StyledMdText from "@/common/components/styledMdText/StyledMdText"
import BackActionButton from "@/components/backActionButton/BackActionButton"
import InputDropdown from "@/components/inputDropdown/InputDropdown"
import InputField from "@/components/inputField/InputField"
import CardForm from "@/components/cardForm/CardForm"

const AddNewCardPage = () => {

    const companyOptions = [
        {
            key: "United States",
            value: "United States",
            flag: "/assets/icons/us.svg"
        },
        {
            key: "United Kingdom",
            value: "United Kingdom",
            flag: "/assets/icons/uk.svg"
        },
        {
            key: "Pakistan",
            value: "Pakistan",
            flag: "/assets/icons/pak.svg"
        },
        {
            key: "Saudia Arabia",
            value: "Saudia Arabia",
            flag: "/assets/icons/ksa.svg"
        },
        {
            key: "Spain",
            value: "Spain",
            flag: "/assets/icons/es.svg"
        },
        {
            key: "Italy",
            value: "Italy",
            flag: "/assets/icons/it.svg"
        },
        {
            key: "Australia",
            value: "Australia",
            flag: "/assets/icons/au.svg"
        },
        {
            key: "France",
            value: "France",
            flag: "/assets/icons/fr.svg"
        },
    ]

    const [selectedState, setSelectedState] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [showInfo, setShowInfo] = useState(false);

    const iconRef = useRef()

    const handleStateChange = (option) => {
        setSelectedState(option);
    };

    const handleRegionChange = (option) => {
        setSelectedRegion(option);
    };

    return (
        <div className="flex flex-col w-full h-full gap-8 xl:flex-row">
            <div className="xl:w-[50%] flex flex-col gap-7">
                <div>
                    <BackActionButton fontColor="text-black" />
                </div>
                <div className="flex flex-col w-full gap-1">
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <StyledH3Heading font="text-light-blue-gradient font-inter">Add New Card</StyledH3Heading>
                        </div>
                    </div>
                    <div className="xl:w-full">
                        <StyledMdText font="text-dark-gray">Add your billing details and card information and pay to get access to your pharmaceutical dashboard.</StyledMdText>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-8 p-5 xl:p-10 border border-light-gray rounded-[22px]">
                    <div>
                        <StyledH4Heading font="text-light-blue-gradient !leading-tight">Billing Address</StyledH4Heading>
                    </div>
                    <div className="grid w-full grid-cols-2 gap-5">
                        <div className="w-full col-span-2">
                            <InputField label="Address (optional)" placeholder="Enter your address" />
                        </div>
                        <div className="w-full col-span-2">
                            <InputDropdown fullWidth isSearchbar isHeading heading="Choose A State/Province" subHeading="Choose a state/province where your company is based." value={selectedState} onChange={handleStateChange} options={companyOptions} label="State/Province (optional)" placeholder="State/Province" />
                        </div>
                        <div className="w-full col-span-2">
                            <InputDropdown fullWidth isSearchbar isHeading heading="Choose A Region" subHeading="Choose a region where your company is based." value={selectedRegion} onChange={handleRegionChange} options={companyOptions} label="Region (optional)" placeholder="Select" />
                        </div>
                        <div className="w-full col-span-2">
                            <InputField label="City (optional)" placeholder="Enter your city" />
                        </div>
                        <div className="w-full col-span-2">
                            <InputField label="Postal code (optional)" placeholder="Postal code" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="xl:w-[50%]">
                <CardForm addNewCard />
            </div>
        </div>
    )
}

export default AddNewCardPage
