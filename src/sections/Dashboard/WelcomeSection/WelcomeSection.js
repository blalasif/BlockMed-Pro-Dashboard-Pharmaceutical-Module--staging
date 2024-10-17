import StyledLgText from "@/common/components/styledLgText/StyledLgText"
import StyledH3Heading from "@/common/components/styledH3Heading/StyledH3Heading"
import StyledMdText from "@/common/components/styledMdText/StyledMdText"
import Button from "@/components/button/Button"
import Image from "next/image"
import Link from "next/link"

const WelcomeSection = () => {
    return (
        <div className="relative w-full h-full flex flex-col gap-3 items-center justify-center xl:h-[38vh]">

            {/*Mobile Screen*/}
            <div className="w-full flex xl:hidden relative flex-col gap-3 xl:gap-6 bg-dark-blue-gradient p-5 xl:p-10 rounded-[12px]">
                <div className="flex flex-col w-full gap-3">
                    <div>
                        <StyledH3Heading font="text-white capitalize leading-tight">welcome to the pharmaceutical dashboard.</StyledH3Heading>
                    </div>
                    <div>
                        <StyledLgText font="text-white leading-tight">Use filters to explore personalised patient data, enhancing your pharmaceutical research</StyledLgText>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <div>
                        <StyledMdText font="text-white font-normal">Let&rsquo;s begin.</StyledMdText>
                    </div>
                    <Link href="/search-user-database" className="w-[70%] xl:w-[40%]">
                        <Button font="text-lg !rounded-[8px]" variant="white-button">
                            <StyledLgText font="text-light-blue-gradient !w-full font-semibold">
                                Buy Patient Data
                            </StyledLgText>
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="w-full xl:hidden">
                <Image src="/assets/images/bg-welcome.svg" width={1000} height={1000} alt="Welcome" className="w-full rounded-[12px] h-full bg-contain" />
            </div>

            {/*Laptop Screen*/}
            <div className="relative hidden w-full h-full xl:mt-1 xl:flex">
                <div className="absolute top-0 left-0 w-[62.25%]">
                    <Image priority={true} src="/assets/images/dashboard-leftSection.svg" width={1000} height={1000} alt="welcome" />
                    <div className="absolute top-0 left-0 h-full p-10">
                        <div className="relative flex flex-col items-center justify-center w-[90%] h-full gap-8">
                            <div className="flex flex-col w-full gap-3">
                                <div>
                                    <StyledH3Heading font="text-white capitalize leading-tight">welcome to the pharmaceutical dashboard.</StyledH3Heading>
                                </div>
                                <div className="w-[85%]">
                                    <StyledLgText font="text-white leading-tight">Use filters to explore personalised patient data, enhancing your pharmaceutical research</StyledLgText>
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <div>
                                    <StyledMdText font="text-white font-normal">Let&rsquo;s begin.</StyledMdText>
                                </div>
                                <Link href="/search-user-database" className="w-[35%]">
                                    <Button font="text-lg !rounded-[8px]" variant="white-button">
                                        <StyledLgText font="text-light-blue-gradient !w-full font-semibold">
                                            Buy Patient Data
                                        </StyledLgText>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[57.75%] absolute top-0 right-0">
                    <Image priority={true} src="/assets/images/dashboard-rightSection.svg" width={1000} height={1000} alt="welcome" />
                </div>
            </div>
        </div>
    )
}

export default WelcomeSection
