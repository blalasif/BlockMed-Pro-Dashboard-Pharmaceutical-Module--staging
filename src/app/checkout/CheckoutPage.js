"use client"

import { useState, useRef } from "react"
import StyledH3Heading from "@/common/components/styledH3Heading/StyledH3Heading"
import StyledH4Heading from "@/common/components/styledH4Heading/StyledH4Heading"
import StyledMdText from "@/common/components/styledMdText/StyledMdText"
import BackActionButton from "@/components/backActionButton/BackActionButton"
import InputDropdown from "@/components/inputDropdown/InputDropdown"
import InputField from "@/components/inputField/InputField"
import { Icon } from "@iconify/react"
import CardForm from "@/components/cardForm/CardForm"
import Tooltip from "@/components/tooltip/Tooltip"
import ContainerCard from "@/components/containerCard/ContainerCard"
import { content } from "@/data/data"

const CheckoutPage = () => {

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
    const [cardAlreadyAdded, setCardAlreadyAdded] = useState(false);

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
                            <StyledH3Heading font="text-light-blue-gradient font-inter">Checkout</StyledH3Heading>
                        </div>
                        {
                            !cardAlreadyAdded &&
                            <div className="relative cursor-pointer">
                                <Icon ref={iconRef} onClick={() => setShowInfo(!showInfo)} className="text-dark-gray" icon="material-symbols:info-outline" width="24" height="24" />
                                {showInfo &&
                                    <Tooltip exceptionRef={iconRef} setShowInfo={setShowInfo} heading="Auto-Renewal Disclaimer" content={`By subscribing to our online data purchasing platform, you agree to an annual subscription that will automatically renew each year on your subscription anniversary date. Your credit card or other payment method on file will be charged the current annual subscription fee unless you cancel your subscription at least 30 days prior to the renewal date. <br /><br />To ensure uninterrupted access to our services, it is your responsibility to keep your payment information up to date. You may update your payment information at any time through your account settings.<br /><br />If you do not wish to continue your subscription, you must cancel it before the renewal date to avoid being charged for the next year by contacting our support team. No refunds will be provided for cancellations made after the renewal charge has been processed.<br /><br />By proceeding with your subscription, you acknowledge and accept these terms and conditions regarding auto-renewal. If you have any questions or need assistance, please contact our customer support team.`} />
                                }
                            </div>}
                    </div>
                    <div className="xl:w-full">
                        <StyledMdText font="text-dark-gray">Add your billing details and card information and pay to get access to your pharmaceutical admin panel.</StyledMdText>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-8 p-5 xl:p-10 border border-light-gray rounded-[22px]">
                    <div>
                        <StyledH4Heading font="text-light-blue-gradient !leading-tight">Billing Address</StyledH4Heading>
                    </div>
                    {
                        cardAlreadyAdded ? (
                            <div className="flex flex-col gap-3">
                                {
                                    content?.billingInformation?.map((item, index) => (
                                        <ContainerCard key={index} styling="!bg-off-white rounded-[8px] flex flex-col gap-3 p-6 relative !shadow-none">
                                            <div className="flex gap-3">
                                                <div className="w-[20%]">
                                                    <StyledMdText font="text-black font-normal">Address:</StyledMdText>
                                                </div>
                                                <div>
                                                    <StyledMdText font="text-black font-semibold">{item?.address}</StyledMdText>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <div className="w-[20%]">
                                                    <StyledMdText font="text-black font-normal">Country:</StyledMdText>
                                                </div>
                                                <div>
                                                    <StyledMdText font="text-black font-semibold">{item?.country}</StyledMdText>
                                                </div>
                                            </div>
                                            <div className="flex gap-3">
                                                <div className="w-[20%]">
                                                    <StyledMdText font="text-black font-normal">Postal Code:</StyledMdText>
                                                </div>
                                                <div>
                                                    <StyledMdText font="text-black font-semibold">{item?.postalCode}</StyledMdText>
                                                </div>
                                            </div>
                                        </ContainerCard>
                                    ))
                                }
                            </div>
                        ) :
                            (
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
                            )
                    }
                </div>
            </div>
            <div className="xl:w-[50%]">
                <CardForm cardAlreadyAdded={cardAlreadyAdded} />
            </div>
        </div>
    )
}

export default CheckoutPage
