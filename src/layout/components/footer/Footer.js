import StyledMdText from "@/common/components/styledMdText/StyledMdText"
import Link from "next/link";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className="h-full xl:h-[59px] flex justify-center items-center bg-black w-full text-white">
            <div className="w-[90%] xl:w-[80%] gap-3 flex flex-col-reverse xl:flex-row text-center justify-between py-5 xl:p-0">
                <div className="pt-5 xl:pt-0">
                    <StyledMdText font="text-white">&#169; {currentYear} BlockMed Pro&trade;. All Rights Reserved.</StyledMdText>
                </div>
                <Link href="terms-of-service">
                    <StyledMdText font="text-white hover:underline underline xl:no-underline">Terms of Service</StyledMdText>
                </Link>
                <Link href="notice-of-privacy-practices">
                    <StyledMdText font="text-white hover:underline underline xl:no-underline">Notice of Privacy Practices</StyledMdText>
                </Link>
                <Link href="notice-of-non-discrimination-and-language-assistance">
                    <StyledMdText font="text-white hover:underline underline xl:no-underline">Notice of Non-Discrimination and Language Assistance</StyledMdText>
                </Link>
            </div>
        </div>
    )
}

export default Footer
