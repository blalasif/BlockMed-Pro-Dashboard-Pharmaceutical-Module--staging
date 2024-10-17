import StyledH3Heading from "@/common/components/styledH3Heading/StyledH3Heading"
import StyledMdText from "@/common/components/styledMdText/StyledMdText"
import Image from "next/image"
import Button from "../button/Button"
import StyledLgText from "@/common/components/styledLgText/StyledLgText"

const PaymentStatusModal = ({ status }) => {
    return (
        <div className="w-full h-full bg-dark-blue-gradient rounded-[22px] items-center justify-center p-10 flex flex-col gap-10">
            <div>
                <Image src={status ? "/assets/icons/success.svg" : "/assets/icons/fail.svg"} alt="Success" width={109} height={109} />
            </div>
            <div className="flex flex-col w-full gap-2 text-center">
                <div>
                    <StyledH3Heading font="text-white">{status ? "Payment Successful" : "Payment Failed"}</StyledH3Heading>
                </div>
                <div>
                    <StyledMdText font="text-white">{status ? "Your payment for access to our platform has been processed. Thank you!" : "Payment for the platform fee was failed."}</StyledMdText>
                </div>
            </div>
            <div className="flex flex-col items-center w-full gap-4">
                <div className="w-[90%]">
                    <Button variant="white-button" font="text-h6 font-inter font-semibold">{status ? "Great! Let’s add users" : "Try Again"}</Button>
                </div>
                <div>
                    <StyledLgText font="text-white underline font-semibold">{status ? "No, take me to the dashboard" : "Or Contact Our Support Team"}</StyledLgText>
                </div>
            </div>
        </div>
    )
}

export default PaymentStatusModal
