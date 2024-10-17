"use client"

import React, { useState } from 'react'
import StyledH3Heading from '@/common/components/styledH3Heading/StyledH3Heading'
import StyledLgText from '@/common/components/styledLgText/StyledLgText'
import ContainerCard from '@/components/containerCard/ContainerCard'
import DashboardLayout from '@/layout/DashboardLayout/DashboardLayout'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import Button from '@/components/button/Button'
import StyledH5Heading from '@/common/components/styledH5Heading/StyledH5Heading'
import Card from '@/components/card/Card'
import Image from 'next/image'
import StyledMdText from '@/common/components/styledMdText/StyledMdText'
import StyledSmText from '@/common/components/styledSmText/StyledSmText'
import TransactionCard from '@/components/transactionCard/TransactionCard'
import { content } from '@/data/data'

const transactions = [
    {
        detail: "Non-Clinical Data",
        qty: "10,000",
        price: "$ 100",
    },
    {
        detail: "Non-Clinical Data",
        qty: "10,000",
        price: "$ 100",
    },
    {
        detail: "Non-Clinical Data",
        qty: "10,000",
        price: "$ 100",
    },
    {
        detail: "Non-Clinical Data",
        qty: "10,000",
        price: "$ 100",
    },
    {
        detail: "Non-Clinical Data",
        qty: "10,000",
        price: "$ 100",
    },
];

const Page = () => {

    const [cards, setCards] = useState(content.cardData);

    const handleDefaultChange = (index) => {
        const updatedCards = cards.map((card, i) => ({
            ...card,
            isDefault: i === index,
        }));
        setCards(updatedCards);
    };

    return (
        <DashboardLayout>
            <div className="flex justify-center w-full h-full">
                <div className="flex flex-col w-[95%] xl:w-full gap-3 xl:gap-5">
                    <div className="flex flex-col gap-0">
                        <div>
                            <StyledH3Heading font="text-light-blue-gradient">Cards & Billing</StyledH3Heading>
                        </div>
                        <div>
                            <StyledLgText font="text-dark-gray">Update or change your cards and billing information here</StyledLgText>
                        </div>
                    </div>
                    <div className="w-full">
                        <ContainerCard styling="w-full flex flex-col gap-3 xl:!px-10 !py-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <StyledH5Heading font="text-light-blue-gradient py-1">Saved Cards</StyledH5Heading>
                                </div>
                                <Link href="/add-new-card" className="xl:w-[15%]">
                                    <Button font="text-white font-semibold text-lg flex items-center justify-center px-2 gap-1 !py-1.5" variant="bg-light-blue-gradient">
                                        <Icon icon="fluent:add-square-20-filled" width="34" height="34" />Add Card
                                    </Button>
                                </Link>
                            </div>
                            <div className="flex justify-between w-full gap-3 overflow-x-auto">
                                {
                                    cards?.map((card, index) => (
                                        <Card key={index} cardData={card} onChange={() => handleDefaultChange(index)} />
                                    ))
                                }
                            </div>
                        </ContainerCard>
                    </div>
                    <div className="flex flex-col justify-between w-full gap-3 pb-10 xl:gap-5 xl:flex-row">
                        <div className="flex flex-col gap-3 xl:gap-5 xl:w-[60%]">
                            <div>
                                <ContainerCard styling="flex flex-col gap-3 !px-10 !py-5">
                                    <div>
                                        <StyledH5Heading font="text-light-blue-gradient">License Fee</StyledH5Heading>
                                    </div>
                                    <div>
                                        <StyledLgText font="text-dark-gray">Next Payment : 25 June 2025</StyledLgText>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <Image src="/assets/icons/mastercard-card.svg" width={24} height={15} alt="Card type" />
                                        </div>
                                        <div>
                                            <StyledLgText font="text-black font-bold">XXXX XXXX XXXX 6969</StyledLgText>
                                        </div>
                                    </div>
                                </ContainerCard>
                            </div>
                            <div>
                                <ContainerCard styling="flex flex-col gap-3 xl:!px-10 !py-5">
                                    <div>
                                        <StyledH5Heading font="text-light-blue-gradient">Billing Information</StyledH5Heading>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        {
                                            content?.billingInformation?.map((item, index) => (
                                                <ContainerCard key={index} styling="!bg-off-white rounded-[8px] flex flex-col gap-3 p-6 relative !shadow-none">
                                                    <div className="absolute flex gap-3 top-2 right-3">
                                                        <button disabled={true} className="flex disabled:opacity-50 items-center font-inter gap-1.5 disabled:text-dark-gray text-red disabled:cursor-not-allowed">
                                                            <div>
                                                                <Icon icon="fluent:delete-28-regular" width="16" height="16" />
                                                            </div>
                                                            <div>
                                                                <StyledSmText font="font-semibold">Delete</StyledSmText>
                                                            </div>
                                                        </button>
                                                        <button disabled={true} className="flex disabled:opacity-50 items-center gap-1.5 font-inter disabled:text-dark-gray text-blue disabled:cursor-not-allowed">
                                                            <div>
                                                                <Icon icon="lets-icons:edit" width="16" height="16" />
                                                            </div>
                                                            <div>
                                                                <StyledSmText font="font-semibold">Edit</StyledSmText>
                                                            </div>
                                                        </button>
                                                    </div>
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
                                </ContainerCard>
                            </div>
                        </div>
                        <div className="xl:w-[40%]">
                            <TransactionCard transactions={transactions} />
                        </div>
                    </div>
                </div>
            </div >
        </DashboardLayout >
    )
}

export default Page
