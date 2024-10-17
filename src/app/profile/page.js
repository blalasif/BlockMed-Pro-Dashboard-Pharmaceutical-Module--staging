import React from 'react'
import StyledH3Heading from '@/common/components/styledH3Heading/StyledH3Heading'
import StyledH4Heading from '@/common/components/styledH4Heading/StyledH4Heading'
import StyledLgText from '@/common/components/styledLgText/StyledLgText'
import ContainerCard from '@/components/containerCard/ContainerCard'
import DashboardLayout from '@/layout/DashboardLayout/DashboardLayout'
import Button from '@/components/button/Button'
import InputField from '@/components/inputField/InputField'

const Page = () => {
    return (
        <DashboardLayout>
            <div className="flex justify-center w-full h-full pt-2 xl:pt-4">
                <div className="w-[95%] xl:w-[60%] flex flex-col gap-5">
                    <div className="flex flex-col gap-1">
                        <div>
                            <StyledH3Heading font="text-light-blue-gradient leading-none">Profile</StyledH3Heading>
                        </div>
                        <div>
                            <StyledLgText font="text-dark-gray">Update your profile details here</StyledLgText>
                        </div>
                    </div>
                    <div className="w-full">
                        <ContainerCard styling="w-full flex flex-col gap-9 !p-10">
                            <div>
                                <StyledH4Heading font="text-light-blue-gradient py-1">Basic Details</StyledH4Heading>
                            </div>
                            <div className="flex flex-col items-center gap-5">
                                <div className="w-full">
                                    <InputField label="First Name" placeholder="Enter your first name" />
                                </div>
                                <div className="w-full">
                                    <InputField label="Last Name" placeholder="Enter your last name" />
                                </div>
                                <div className="w-full">
                                    <InputField label="Email" placeholder="Enter your email" />
                                </div>
                                <div className="w-full">
                                    <Button font="text-white font-semibold text-lg" variant="bg-light-blue-gradient">Save</Button>
                                </div>
                            </div>
                        </ContainerCard>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default Page
