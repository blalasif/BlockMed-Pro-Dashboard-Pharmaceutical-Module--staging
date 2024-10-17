import StyledH2Heading from '@/common/components/styledH2Heading/StyledH2Heading'
import StyledLgText from '@/common/components/styledLgText/StyledLgText'
import DashboardLayout from '@/layout/DashboardLayout/DashboardLayout'
import Image from 'next/image'
import React from 'react'

const Page = () => {
    return (
        <DashboardLayout>
            <div className="flex flex-col items-center justify-center w-full h-[85vh] xl:h-full gap-10">
                <div>
                    <Image src="/assets/images/coming-soon.svg" width={291} height={291} alt="hero" />
                </div>
                <div className="flex flex-col items-center w-full gap-1">
                    <div>
                        <StyledH2Heading font="text-light-blue-gradient">Coming Soon</StyledH2Heading>
                    </div>
                    <div>
                        <StyledLgText font="text-dark-gray text-center">Exciting News! Something amazing is coming soon. <br />Stay tuned for updates!</StyledLgText>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Page
