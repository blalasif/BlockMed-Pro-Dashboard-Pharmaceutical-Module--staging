import React from 'react'
import ContainerCard from '../containerCard/ContainerCard'
import StyledH5Heading from '@/common/components/styledH5Heading/StyledH5Heading'
import Button from '../button/Button'
import StyledMdText from '@/common/components/styledMdText/StyledMdText'
import Link from 'next/link'

const TransactionCard = ({ transactions }) => {
    return (
        <div className="w-full">
            <ContainerCard styling="xl:!px-10 pt-5 flex flex-col gap-4 pb-10">
                <div className="flex items-center justify-between w-full">
                    <div>
                        <StyledH5Heading font="text-light-blue-gradient">Recent Transactions</StyledH5Heading>
                    </div>
                    <Link href="/transactions" className="w-[25%]">
                        <Button font="text-white font-semibold text-md !py-2 rounded-[8px]" variant="bg-light-blue-gradient">View All</Button>
                    </Link>
                </div>
                <div>
                    <hr className="w-full text-dark-gray" />
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-8">
                        <div>
                            <StyledMdText font="text-dark-gray font-semibold">Detail</StyledMdText>
                        </div>
                        <div className="flex flex-col gap-6">
                            {transactions.map((transaction, index) => (
                                <StyledMdText key={index} font="text-black font-semibold">
                                    {transaction.detail}
                                </StyledMdText>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div>
                            <StyledMdText font="text-dark-gray font-semibold">QTY</StyledMdText>
                        </div>
                        <div className="flex flex-col gap-6">
                            {transactions.map((transaction, index) => (
                                <StyledMdText key={index} font="text-black font-semibold">
                                    {transaction.qty}
                                </StyledMdText>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div>
                            <StyledMdText font="text-dark-gray font-semibold">Price</StyledMdText>
                        </div>
                        <div className="flex flex-col gap-6">
                            {transactions.map((transaction, index) => (
                                <StyledMdText key={index} font="text-black font-semibold">
                                    {transaction.price}
                                </StyledMdText>
                            ))}
                        </div>
                    </div>
                </div>
            </ContainerCard>
        </div>
    )
}

export default TransactionCard
