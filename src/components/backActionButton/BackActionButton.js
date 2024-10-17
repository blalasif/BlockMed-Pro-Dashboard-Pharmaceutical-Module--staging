"use client"

import StyledLgText from "@/common/components/styledLgText/StyledLgText"
import { Icon } from "@iconify/react"
import { useRouter } from "next/navigation";

const BackActionButton = ({ fontColor }) => {

    const router = useRouter();

    const handleBack = (e) => {
        e.preventDefault();
        router.back();
    };

    return (
        <div onClick={(e) => handleBack(e)} className="flex items-center gap-3 cursor-pointer group w-max">
            <div className="transition-all duration-500 group-hover:-translate-x-1 min-w-5">
                <Icon icon="weui:back-filled" width="20" height="20" color={fontColor === "text-light-blue-gradient" ? "AD00FF" : "#000"} />
            </div>
            <div>
                <StyledLgText font={`${fontColor} font-semibold`}>Back</StyledLgText>
            </div>
        </div>
    )
}
export default BackActionButton
