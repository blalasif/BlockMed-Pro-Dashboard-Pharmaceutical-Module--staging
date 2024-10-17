import StyledH3Heading from '@/common/components/styledH3Heading/StyledH3Heading'
import DashboardLayout from '@/layout/DashboardLayout/DashboardLayout'
import TransactionsTableSection from '@/sections/Transactions/TransactionsTableSection/TransactionsTableSection'
import React from 'react'

const Page = () => {
    return (
        <DashboardLayout>
            <div className="relative flex flex-col items-center w-full gap-4">
                <div className="w-[95%] xl:w-full pt-3">
                    <StyledH3Heading font="text-light-blue-gradient leading-tight">Transactions</StyledH3Heading>
                </div>
                <div className="w-[95%] xl:w-full">
                    <TransactionsTableSection />
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Page
