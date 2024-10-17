"use client"

import React from 'react'
import StyledH5Heading from '@/common/components/styledH5Heading/StyledH5Heading'
import StyledMdText from '@/common/components/styledMdText/StyledMdText'
import StyledSmText from '@/common/components/styledSmText/StyledSmText'
import Image from 'next/image'
import { content } from '@/data/data'

const Card = ({ cardData, onChange }) => {

    const cardConfig = content?.cardType?.find(card => card?.type === cardData?.type);

    return (
        <div className={`w-[312px] min-w-[312px] ${cardConfig?.bgColor || "bg-dark-blue-gradient"} flex flex-col gap-6 rounded-[18px] p-5 relative`}>
            <div className="absolute flex items-center gap-2 top-3 right-4">
                <label class="custom-checkbox">
                    <input checked={cardData?.isDefault} onChange={onChange} type="checkbox" id="defaultCard" class="checkbox" />
                    <span class="checkmark"></span>
                    <StyledSmText font="text-white">Default</StyledSmText>
                </label>
            </div>
            <div className="min-w-[37px] min-h-[26px] max-w-[37px] max-h-[26px] flex items-center">
                <Image src={cardConfig?.svg || "/assets/icons/mastercard-card.svg"} alt="mastercard" width={37} height={26} />
            </div>
            <div className="flex flex-col gap-1">
                <div>
                    <StyledSmText font="text-white">Card number</StyledSmText>
                </div>
                <div>
                    <StyledH5Heading font="text-white">XXXX XXXX XXXX {cardData?.number}</StyledH5Heading>
                </div>
            </div>
            <div className="flex justify-between w-full">
                <div className="flex flex-col gap-1">
                    <div>
                        <StyledSmText font="text-white">Card holder number</StyledSmText>
                    </div>
                    <div>
                        <StyledMdText font="font-normal text-white">{cardData?.name}</StyledMdText>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <div>
                        <StyledSmText font="text-white">Expiry</StyledSmText>
                    </div>
                    <div>
                        <StyledMdText font="font-normal text-white">{cardData?.expiry}</StyledMdText>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
