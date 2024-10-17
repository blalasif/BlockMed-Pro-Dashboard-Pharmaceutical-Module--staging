import StyledH4Heading from '@/common/components/styledH4Heading/StyledH4Heading'
import StyledMdText from '@/common/components/styledMdText/StyledMdText'
import Image from 'next/image'
import React from 'react'
import ContainerCard from '../containerCard/ContainerCard'
import { fPostfixNumber } from '@/helpers/Helpers'

const StatsCard = ({ statsData, styling, size = {} }) => {
    return (
        <ContainerCard styling="w-full items-center h-full flex justify-between">
            <div className={`flex flex-col pl-1.5 justify-between w-[70%] ${styling}`}>
                <div>
                    <StyledMdText font="font-semibold text-dark-gray">{statsData?.title}</StyledMdText>
                </div>
                <div>
                    <StyledH4Heading font="text-black">{fPostfixNumber(statsData?.value)}</StyledH4Heading>
                </div>
            </div>
            <div className={`w-[30%] flex justify-end max-w-[${size}px]`}>
                <Image src={statsData?.svg} width={size} height={size} alt="stats-graph" />
            </div>
        </ContainerCard>
    )
}

export default StatsCard
