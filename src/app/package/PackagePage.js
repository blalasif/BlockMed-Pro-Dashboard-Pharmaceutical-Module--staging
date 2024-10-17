"use client"

import StyledH1Heading from "@/common/components/styledH1Heading/StyledH1Heading"
import StyledH4Heading from "@/common/components/styledH4Heading/StyledH4Heading"
import StyledH6Heading from "@/common/components/styledH6Heading/StyledH6Heading"
import StyledLgText from "@/common/components/styledLgText/StyledLgText"
import Button from "@/components/button/Button"
import { Icon } from "@iconify/react"
import Image from "next/image"
import { useState } from "react"

const PackagePage = () => {

    const eachPackagePrice = 99.8;
    const [noOfUsers, setNoOfUsers] = useState(10)

    const packageDetails = [
        {
            text: `${noOfUsers} user accounts`
        },
        {
            text: "User control panel"
        },
        {
            text: "Option to purchase data"
        },
    ]

    const handleDecrement = () => {
        if (noOfUsers > 5) {
            setNoOfUsers(noOfUsers - 1)
        }
    }

    const handleIncrement = () => {
        if (noOfUsers < 100) {
            setNoOfUsers(noOfUsers + 1)
        }
    }

    return (
        <div className="flex flex-col items-center w-full gap-6 p-5 xl:p-10 rounded-[22px] border border-purple">
            <div>
                <StyledH4Heading font="text-light-blue-gradient">Annual License Fee</StyledH4Heading>
            </div>
            <div>
                <StyledH1Heading font="text-black">${(eachPackagePrice * noOfUsers).toFixed(0)}</StyledH1Heading>
            </div>
            <div className="w-full">
                <hr className="w-full text-light-gray" />
            </div>
            <div className="flex flex-col w-full gap-7">
                <div>
                    <StyledH4Heading font="text-dark-blue">Includes:</StyledH4Heading>
                </div>
                <div className="flex flex-col w-full gap-3">
                    {packageDetails?.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 xl:gap-6">
                            <div>
                                <Image src="/assets/icons/check.svg" alt="Check" width={20} height={20} />
                            </div>
                            <div>
                                <StyledLgText font="text-black">{item?.text}</StyledLgText>
                            </div>
                            {index === 0 &&
                                <div className="flex items-center gap-3">
                                    <div className={`${noOfUsers <= 5 ? "cursor-not-allowed" : "cursor-pointer"} min-w-[20px]`} onClick={handleDecrement}>
                                        <Icon color={noOfUsers <= 5 ? "969696" : "#000000"} icon="icons8:minus" width="20" height="20" />
                                    </div>
                                    <div>
                                        <StyledH6Heading font="text-black">{noOfUsers}</StyledH6Heading>
                                    </div>
                                    <div className="cursor-pointer min-w-[20px]" onClick={handleIncrement}>
                                        <Icon icon="icons8:plus" width="20" height="20" />
                                    </div>
                                </div>
                            }
                        </div>
                    ))
                    }
                </div>
                <div className="w-full">
                    <Button font="text-white font-semibold text-lg" variant="bg-light-blue-gradient">Pay Now</Button>
                </div>
            </div>
        </div>
    )
}

export default PackagePage