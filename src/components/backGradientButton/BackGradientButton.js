"use client"

import { Icon } from "@iconify/react"
import { useRouter } from "next/navigation";

const BackGradientButton = () => {

    const router = useRouter();

    const handleBack = (e) => {
        e.preventDefault();
        router.back();
    };

    return (
        <div onClick={(e) => handleBack(e)} className="transition-all group cursor-pointer w-max min-w-[27px] min-h-[27px] p-1.5 bg-light-blue-gradient rounded-[5px]">
            <Icon className="duration-500 group-hover:-translate-x-1" icon="weui:back-filled" color="#fff" width="15" height="15" />
        </div>
    )
}
export default BackGradientButton
